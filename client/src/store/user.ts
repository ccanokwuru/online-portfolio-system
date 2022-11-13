import { defineStore } from "pinia";
import { computed, watch } from "vue";
import { api } from "../api";

interface UserI {
  authToken?: string;
  refreshToken?: string;
  user?: {
    email: string;
    id: string;
    role: string;
    createdAt: Date | string;
    updatedAt: Date | string;
  };
}

interface LoginI {
  email: string;
  password: string;
}

const authToken = computed(() => localStorage.getItem("token") ?? undefined);
const user = computed(() => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : undefined;
});

export const userStore = defineStore("user", {
  // other options...
  state: (): UserI => {
    return {
      authToken: authToken.value,
      user: user.value,
      refreshToken: computed(() => localStorage.getItem("x_token") ?? undefined)
        .value,
    };
  },
  actions: {
    async login(data: LoginI) {
      const response = await fetch(`${api}/auth/login`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) return await response.json();

      const json = await response.json();

      await (async () => {
        localStorage.setItem("token", json.authToken);
        localStorage.setItem("user", JSON.stringify(json.user));
        localStorage.setItem("x_token", json.refreshToken ?? null);
      })();

      this.authToken = json.authToken;
      this.user = json.user;
      this.refreshToken = json.refreshToken;

      return {
        message: "success",
      };
    },

    async refreshAuth() {
      const refresh = await fetch(`${api}/auth/refresh`, {
        method: "post",
        body: JSON.stringify({ refreshToken: this.refreshToken }),
        headers: {
          Authorization: `Bearer ${this.authToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!refresh.ok) {
        localStorage.clear();
        sessionStorage.clear();
      }

      const json = await refresh.json();

      await (async () => {
        localStorage.setItem("token", json.authToken ?? null);
        localStorage.setItem("user", JSON.stringify(json.user) ?? null);
        localStorage.setItem("x_token", json.refreshToken ?? null);
      })();

      this.authToken = json.authToken;
      this.refreshToken = json.refreshToken;
      this.user = json.user;

      return refresh;
    },
  },
});
