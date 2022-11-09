import { defineStore } from "pinia";
import { computed } from "vue";
import { api } from "../api";

interface UserI {
  authToken?: string;
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
      console.log(json);
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("user", JSON.stringify(json.user));
      return {
        message: "success",
      };
    },
    refreshAuth() {},
  },
});
