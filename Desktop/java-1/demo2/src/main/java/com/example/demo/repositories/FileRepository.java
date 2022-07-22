package com.example.demo.repositories;

import com.example.demo.modals.Filer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<Filer, Long> {
}
