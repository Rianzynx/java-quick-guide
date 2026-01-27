package com.guia.java_quick_guide.model;

public enum UserRole {
    ADMIN("admin"),
    User("user");

    private String role;

    UserRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
