# WMAPPLICATION
This repository consist of simple user registration Angular web application : Wunder Mobility 

# Used Technologies and libraries:
- Angular
- Typescript
- Angular material
- HttpModule

# Possible optimizations for my code
- Can use authguard to protect the direct use of URL for accessing application internal routes.
- Interceptor can be for Http call to set header.
- Loader can be implemented by common service.


# Things could be more better
- UI could be more better.
- Local storage can be imporved ( have implemented basic one)

# Problems Faced
- During API call to get the payment Id I faced Cross Origin issue.

# Project Structure
- Four main components:
	1. Personal Information
	2. Address Information
	3. Payment Information
	4. Success
- Services:
	1. Data Storage
	2. Http request
- Data Model:
	 1.   Http request body
- Proxy Setting file
- Asset:
    1.Sucess image for final page

# Assumptions
Assuming frontend and server are running on same machine in that case proxy.json file will not required.
if they are not same machine then proxy settings has to be done accordingly
