import logging
import pyodbc
import os 
import azure.functions as func
import json 



def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        
        #connect to database 
        conn = pyodbc.connect(os.environ['ConnString']) 
        logging.info('connected to database') 
        cursor = conn.cursor()
        
        #variable for vendor
        vendor = req.route_params.get('campaignState')
        logging.info(vendor)
        
        #select specific vendor from database 
        rows = cursor.execute("SELECT * FROM [dbo].[campaignDetails] WHERE campaignState = ?", vendor).fetchone() 
        logging.info(rows) 
        
        #get column names and turn into json file  
        column_names = [column[0] for column in cursor.description]
        result = [dict(zip(column_names, rows))] 
        
        #commit the query 
        conn.commit() 
        
        #disconnect database  
        cursor.close()  
        conn.close() 
        logging.info('connection to databse closed')
        
    else:
        return func.HttpResponse(
             "Please pass a name on the query string or in the request body",
             status_code=400
        )