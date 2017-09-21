package com.cg.mobile.dbutil;

import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;
public class DBUtil {

public static Connection getConnection() throws IOException, SQLException
{
	Connection conn=null;
	Properties prop=readdbInfo();
	String url=prop.getProperty("url");
	String username=prop.getProperty("username");
	String password=prop.getProperty("password");
	conn=DriverManager.getConnection(url,username,password);
	return conn;
}

private static Properties readdbInfo() throws IOException {
	// TODO Auto-generated method stub
	Properties p=new Properties();
	FileReader fr= new FileReader("DBInfo.properties");
	p.load(fr);
	return p;
}

}

DBInfo.properties
driver=oracle.jdbc.driver.OracleDriver
url=jdbc:oracle:thin:@10.219.34.3:1521:orcl
username=trg305
password=training305
