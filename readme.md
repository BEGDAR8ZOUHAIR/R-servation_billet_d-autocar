
# conception UML 
 -diagramme de classe: https://lucid.app/lucidchart/b12551d8-9f79-4311-8239-7f6de8404318/edit?invitationId=inv_ac8bfdca-bc90-47fe-9004-4097c031c29c&page=0_0#

 # REST API docs

## Parameters

## GET
1. use the **GET** method with the associated parameters link to get all records from DB,   
example: `domain-name.com/parameters/endpoint`   
a response with **200** status code and all records in json format will be returned if the DB not empty

## POST  
2. use the **POST** method with the associated parameters link to create new record in DB:   
accceptable data are json object that contains at least id and required fields example:    
```
{
    "id": 1,
    "required_field_1": "required field",
    "required_field_2": "required field",  
    ...
}
```   
if data are valid a response with **201** status code and the object itself will returned, otherwise a **400** response will raise 

## PUT  
3. use the **PUT** method with the associated `domain-name.com/parameters/endpoint/id`  link to partial update a record in DB with the paramaters to be replaced, take in mind that after the endpoint you have to add the id of record and also in the json data  
example:   
```
{
    "id": 1,
    "required_field_1": "updated data", 
}
```
a thrown request with **200** status code and the updated object will returned   

## DELETE
1. use the **DELETE** method with the id to be deleted   
example: `domain-name.com/parameters/endpoint/id`   
a response with **204** status code will be returned if the DB not empty



# Tables
**URL :** `api/parameters/ `
## brand
**ENDPOINT :** `trip/ `  
**Fields** :  
- **id** : Integer primary key
- **name** : required, string, length=30
- **active** : bool, default=true  





