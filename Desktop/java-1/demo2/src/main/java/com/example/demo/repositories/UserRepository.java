package com.example.demo.repositories;

import com.example.demo.modals.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityManager;

public interface UserRepository extends JpaRepository<User, Long> {

}
