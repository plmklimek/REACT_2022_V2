package com.example.demo.controllers;

import com.example.demo.modals.Filer;
import com.example.demo.repositories.FileRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FileController {
    private static FileRepository fileRepository;
    public FileController(FileRepository fileRepository){
        this.fileRepository = fileRepository;
    }
    @RequestMapping(value = "/addFile", method = RequestMethod.POST)
    public Filer addFile(@RequestBody Filer file){
        return fileRepository.save(file);
    }
}
