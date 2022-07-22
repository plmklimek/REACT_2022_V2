package com.example.demo;

import com.example.demo.modals.Filer;
import com.example.demo.modals.User;

import java.util.List;

public class UserDto {
    private Long id;
    private String name;
    private List<Filer> files;
    public User map(){
        return User.builder().name(name).files(files).build();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Filer> getFiles() {
        return files;
    }

    public void setFiles(List<Filer> files) {
        this.files = files;
    }
}
