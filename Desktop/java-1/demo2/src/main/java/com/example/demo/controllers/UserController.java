package com.example.demo.controllers;

import com.example.demo.UserDto;
import com.example.demo.modals.Filer;
import com.example.demo.modals.User;
import com.example.demo.repositories.FileRepository;
import com.example.demo.repositories.UserRepository;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
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
@Transactional
@RestController
public class UserController {
    private final UserRepository userRepository;
    private final FileRepository fileRepository;
    private final EntityManager entityManager;

    public UserController(UserRepository userRepository, FileRepository fileRepository, EntityManager entityManager){
        this.userRepository = userRepository;
        this.fileRepository = fileRepository;
        this.entityManager = entityManager;
    }
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public User addUser(@RequestBody User user){
        User user1 = new User();
        user1.setName(user.getName());
        entityManager.persist(user1);

        user.getFiles()
                .forEach(filer -> {
                    Filer filer1 = entityManager.find(Filer.class, filer.getId());
                    user1.getFiles().add(filer);
                    filer1.getUsers().add(user);
                });
        userRepository.save(user1);
        return user1;
    }
    @RequestMapping(value = "/display", method = RequestMethod.GET)
    public User display(){
       return userRepository.findById(1L).get();
    }
}
