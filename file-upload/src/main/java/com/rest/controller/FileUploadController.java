package com.rest.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rest.constants.CommonConstants;
import com.rest.properties.CommonProperties;


@RestController
@RequestMapping("file")
public class FileUploadController {
	private static final Logger logger = LoggerFactory
			.getLogger(FileUploadController.class);
	
	@Autowired
	CommonProperties commonProperties;
	
	@RequestMapping(value = "sayHello", method = RequestMethod.GET)
	public ResponseEntity<String> getAllTicketDetails(){
		logger.info(this.getClass().getName() + " - getAllTicketDetails - START");
		String str = "Hello";
		return new ResponseEntity<String>(str,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/fileUpload", method = RequestMethod.POST)
	public void fileUpload(@RequestPart("file") MultipartFile file,HttpServletResponse response) {
		logger.debug("FileUploadController - fileUpload - START");

		if (file.getOriginalFilename().toLowerCase().endsWith(CommonConstants.CSV_FILE_FORMAT)
				|| file.getOriginalFilename().toLowerCase().endsWith(CommonConstants.XLSX_FILE_FORMAT) || file.getOriginalFilename().toLowerCase().endsWith(CommonConstants.XLS_FILE_FORMAT)) {
			
			if(file.getSize() > ( commonProperties.getPublishedReportMaxSize() * 1024 *1024 )){
				try {
					response.sendError(700);
				} catch (IOException e) {
					logger.error("FileUploadController - fileUpload - Exception", e);
				}
				return;
			}
			
			String name = commonProperties.getDestFilePath()+ File.separator + file.getOriginalFilename();
			File destFile = new File(name);
			try {
				file.transferTo(destFile);
			} catch (IllegalStateException e) {
				try {
					response.sendError(600);
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					logger.error("FileUploadController - fileUpload - Exception", e1);
				}
				logger.error("FileUploadController - fileUpload - Exception", e);
			} catch (IOException e) {
				try {
					response.sendError(600);
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					logger.error("FileUploadController - fileUpload - Exception", e1);
				}
				logger.error("FileUploadController - fileUpload - Exception", e);
			}
			logger.debug("FileUploadController - fileUpload - END");

		}
		else{
			try {
				response.sendError(600);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			logger.error("FileUploadController - fileUpload - Exception; Not valid format");
		}

	}
}
