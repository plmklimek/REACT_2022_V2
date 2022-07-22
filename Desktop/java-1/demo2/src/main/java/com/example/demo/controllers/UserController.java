package com.example.demo.controllers;

import com.example.demo.UserDto;
import com.example.demo.modals.Filer;
import com.example.demo.modals.User;
import com.example.demo.repositories.FileRepository;
import com.example.demo.repositories.UserRepository;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class UserController {
    private static UserRepository userRepository;
    private static FileRepository fileRepository;

    public UserController(UserRepository userRepository, FileRepository fileRepository){
        this.userRepository = userRepository;
        this.fileRepository = fileRepository;
    }
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public User addUser(@RequestBody User user){
        User save = userRepository.save(user);
        List<Filer> collect = save.getFiles()
                .stream()
                .map(filer -> fileRepository.findById(filer.getId()).get())
                .collect(Collectors.toList());
        return user;
    }
    @RequestMapping(value = "/display", method = RequestMethod.GET)
    public User display(){
       return userRepository.findById(26L).get();
    }
}
