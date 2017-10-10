# Alfresco Repo Municipal Agendas Module

Content model and webscripts to provide a management and presentation system for municipal agendas.

//see Alfresco Share Municipal Agendas Module for additional management features.


# Alfresco Platform JAR Module - SDK 3

To run use `mvn clean install -DskipTests=true alfresco:run` or `./run.sh` and verify that it 

 * Runs the embedded Tomcat + H2 DB 
 * Runs Alfresco Platform (Repository)
 * Runs Alfresco Solr4
 * Packages both as JAR and AMP assembly
 
 Try cloning it, change the port and play with `enableShare`, `enablePlatform` and `enableSolr`. 
 
 Protip: This module will work just fine as a Share module if the files are changed and 
 if the enablePlatform and enableSolr is disabled.
 
# Few things to notice
 
# TODO
 
* Get some actual webscripts going.
* Make atom feed for website consumption...   
  
 
