# Udemy Paper 01 Notes

>  [Paper 01 Link on Udemy](https://www.udemy.com/course/aws-certified-cloud-practitioner-clf-c01/learn/quiz/4972024/result/412366430#overview)
>
>  50%

### 1. Question 6: **Incorrect**

You wish to configure a bucket that will enforce a policy that enables anonymous to access its content if they connect to the data from the Corporate and branch offices as part of your security strategy. Which S3 configuration feature will enable you to define the IP Ranges from where you will allow access to the data?

- NTFS Permissions
- Bucket Policy :white_check_mark:
- Network Access Control Lists (NACLs)
- Security Groups

#### Explanation

S3 bucket policies specify what actions are allowed or denied for which principals on the bucket that the bucket policy is attached to. Bucket Policies enable you to also define conditional statements so that you can restrict access based on location for example. Also, note that S3 supports bucket policies of up 20 kb.

Security Groups is an incorrect answer because these are used to protect EC2 Instances by enabling you to only allow traffic inbound/outbound on specific ports

NTFS Permissions is an incorrect answer. NTFS (NT File System) permissions are available to drives formatted with NTFS. The advantage with NTFS permissions is that they affect local users as well as network users and they are based on the permission granted to each individual user at the Windows logon, regardless of where the user is connecting.

Network Access Control Lists (NACLs) is an incorrect answer. NACL is a VPC Firewall security services that enable you to configure which inbound and outbound ports you can open at a subnet level,

Ref: https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/



### 2. Question 7: **Incorrect**

Your organization hosts multiple AWS Accounts with multiple VPCs. You would like to connect these VPCs together and centrally manage connectivity policies. Which AWS service enables you to connect multiple VPCs configured as a hub that controls how traffic is routed among all the connected networks which act like spokes?

- AWS Transit Gateway :white_check_mark:
- AWS VPC Peering
- AWS Global Accelerator
- AWS Virtual Private Gateway

#### Explanation

AWS Transit Gateway is a service that enables customers to connect their Amazon Virtual Private Clouds (VPCs) and their on-premises networks to a single gateway. This allows you to connect your on-premise network and all your VPCs in a hub and spoke configuration which significantly simplifies management and reduces operational costs because each network only has to connect to the Transit Gateway and not to every other network.

The answer, ‘AWS Global Accelerator’, is incorrect. AWS Global Accelerator is a service that improves the availability and performance of your applications with local or global users. It provides static IP addresses that act as a fixed entry point to your application endpoints in a single or multiple AWS Regions, such as your Application Load Balancers, Network Load Balancers, or Amazon EC2 instances.

The answer, ‘AWS VPC Peering’, is incorrect. While VPC Peering allows you to connect two VPCs to each other, It goes not enable you to centrally manage multiple VPCs connections centrally. You could configure all your VPCs with individual peering connections, but this becomes very difficult to manage.

The answer, ‘AWS Virtual Private Gateway’, is incorrect. AWS Virtual Private Gateway is a component of your Site to Site VPN connection that needs to be configured to build out a VPC tunnel with your on-premise network.

Ref: https://aws.amazon.com/transit-gateway/



### 3. Question 11: **Incorrect**

Which Amazon S3 Storage Class enables you to optimize costs by automatically moving data to the most cost-effective access tier, while ensuring that frequently access data is made available immediately?

- Amazon Glacier 
- Amazon S3 Standard
- Amazon S3 One-Zone IA
- Amazon S3 Intelligent Tiering :white_check_mark:

#### Explanation

The S3 Intelligent-Tiering storage class is designed to optimize costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead. It works by storing objects in two access tiers: one tier that is optimized for frequent access and another lower-cost tier that is optimized for infrequent access. For a small monthly monitoring and automation fee per object, Amazon S3 monitors access patterns of the objects in S3 Intelligent-Tiering and moves the ones that have not been accessed for 30 consecutive days to the infrequent access tier. If an object in the infrequent access tier is accessed, it is automatically moved back to the frequent access tier.

The answer “S3 Standard” is incorrect as it does not ensure cost-efficiency to your data

The answer “S3 One-Zone IA” is incorrect. While it is cheaper than S3 Standard, it does not ensure automatically moving data to the most cost-effective storage when not required and then moving back to a storage class that makes the data rapidly accessible.

The answer “Amazon Glacier” is incorrect as while it is the cheapest available on the platform, it does not offer the ability to make data instantly available when required. Retrieving data from Glacier can take a bit of time depending on the retrieval option.



### 4. Question 13: **Incorrect**

Which AWS service enables you to perform heterogeneous migrations between different database platforms, such as Oracle to Amazon Aurora

- AWS Database Conversion Service
- AWS Database Migration Service :white_check_mark:
- AWS EKS
- AWS Snowball

#### Explanation

The AWS Database Migration Service can migrate your data to and from the most widely used commercial and open-source databases. The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to Amazon Aurora or Microsoft SQL Server to MySQL.

The answer, AWS Snowball is incorrect. Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of the AWS cloud. Using Snowball addresses common challenges with large-scale data transfers including high network costs, long transfer times, and security concerns.

The answer, AWS EKS is incorrect. Amazon Elastic Kubernetes Service (Amazon EKS) is a fully managed Kubernetes service.

The answer, AWS Database Conversion Service is incorrect as there is no such service.

Ref: https://youtu.be/ouia1Sc5QGo



### 5. Question 15: **Incorrect**

You are building a multi-tier architecture with web servers placed in the public subnet and application servers placed in the private subnet of your VPC. You need to deploy Elastic Load Balancers to distribute traffic to both the web-server farm and the application server farm. Which type of load balancer would you choose to distribute traffic to your application servers?

- Internet-facing
- Static load balancers
- Internal load balancers :white_check_mark:
- Dynamic load balancers

#### Explanation

When you create a load balancer, you must choose whether to make it an internal load balancer or an internet-facing load balancer. In a multi-tier architecture, as described above, you would deploy an internal load balancer to distribute traffic from the webservers to the application servers. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer.

The answer “Internet-facing” is incorrect as this configuration is used to support traffic of web-servers from users on the Internet

The answers “Dynamic load balancers” and “Static load balancers” are incorrect as there is no such service.

Ref: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme



### 6. Question 21: **Incorrect**

A company plans to migrate its on-premises MySQL database to Amazon RDS. Which AWS service should they use for this task?

- AWS Server Migration Service
- Amazon Snowball
- AWS Database Migration Service (AWS DMS) :white_check_mark:
- AWS VM Import/Export

#### Explanation

AWS Database Migration Service helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS Database Migration Service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle or Microsoft SQL Server to Amazon Aurora.

The answer “Amazon Snowball” is incorrect as this service is used to primary copy raw data into Amazon S3. While you can create a backup of your database to S3 and then restore to a server running the MySQL database engine, migrating to RDS is a better option in the majority of cases.

The answer “AWS VM Import/Export” is incorrect as it relates to migrating a VM image to the AWS platform and launching an EC2 Instance from it. A better option would be to migrate your MySQL database to Amazon RDS

The answer “Server Migration Service” is incorrect as it relates to migrating servers to EC2 Instances. A better option would be to migrate your database to Amazon RDS instead.

Ref: https://youtu.be/ouia1Sc5QGo



### 7. Question 26: **Incorrect**

You have a fleet of on-premise servers that require access to a centrally managed cloud storage service. The application running on your servers need to be able to store and retrieve files as durable objects on Amazon S3 over standard NFS based access with local caching. Which AWS service can help you deliver a solution to meet the above required?

- EBS Volumes
- AWS Storage Gateway – File Gateway :white_check_mark:
- Amazon Redshift
- AWS Snowball

#### Explanation

AWS Storage Gateway's file gateway enables you to connect to the cloud to store application data files as durable objects on Amazon S3 cloud storage. The File gateway services offer SMB or NFS-based access to data in Amazon S3 with local caching. It can be used for on-premises applications, and for Amazon EC2-resident applications that need file storage in S3 for object-based workloads.

The answer, ‘AWS Snowball’ is incorrect because it will not offer standard on-going access over NFS mount points which is something that the Storage Gateway offers. Amazon Snowball is an offline data transfer/migration service that uses physical disks secured in enclosure units to transports large volumes of data between on-premise and the AWS cloud.

The answer, ‘Amazon Redshift’ is incorrect as it is a Data Warehousing solution rather than a file management service

The answer, ‘EBS Volumes’ is incorrect as it is a virtual block storage solution that is attached to EC2 instances in the cloud much like attaching a physical disk to your physical servers on-premise.

Ref: https://youtu.be/tP5edaxBEEI



### 8. Question 27: **Incorrect**

You wish to configure an Amazon S3 Event, such that your legal team gets a notification if someone tries to delete an object from a sensitive S3 Bucket? Which AWS Service is used by Amazon S3 to send out notifications to your legal team?

- Amazon CloudWatch
- Amazon Trusted Advisor
- Amazon Email
- Amazon SNS :white_check_mark:

#### Explanation

You can configure Amazon S3 Events to send out notifications to an Amazon SNS topic for various actions that happen on a given S3 Bucket. For example, you can send out a notification message to an SNS topic when someone deletes an object. Subscribers to the SNS Topic will then receive that notification

The answer, ‘Amazon Email’ is incorrect as there is no such service.

The answer, ‘Amazon CloudWatch’ is incorrect. Amazon CloudWatch can help you visualize key metrics, like CPU utilization and memory, and compare them to capacity. You can also correlate the log pattern of a specific metric and set alarms to be proactively alerted about performance and operational issues.

The answer, ‘Amazon Trusted Advisor’ is incorrect. AWS Trusted Advisor offers recommendations that can potentially save you money by highlighting unused resources and opportunities to reduce your bill.

Ref: https://youtu.be/x1_Gj4FIeug



### 9. Question 28: **Incorrect**

Which AWS Service helps you to review the state of your workloads and compares them to the latest AWS architectural best practices?

- AWS Inspector
- AWS Compliance Manager
- AWS Well-Architected Tool :white_check_mark:
- AWS WAF

#### Explanation

The AWS Well-Architected Tool helps you review the state of your workloads and compares them to the latest AWS architectural best practices. The tool is based on the AWS Well-Architected Framework, developed to help cloud architects build secure, high-performing, resilient, and efficient application infrastructure.

The answer, AWS Compliance Manager is incorrect as it focuses only on your compliance and regulatory needs

The answer, AWS WAF is incorrect. AWS WAF is a web application firewall

The answer, AWS Inspector is incorrect. Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector security assessments help you check for unintended network accessibility of your Amazon EC2 instances and for vulnerabilities on those EC2 instances

Ref: https://aws.amazon.com/well-architected-tool/



### 10. Question 36: **Incorrect**

Which AWS service enables you to experience a truly hybrid solution by extending AWS Infrastructure such as EC2 and EBS services such that they can be hosted in your own on-premise datacentre?

- AWS Route53
- AWS Direct Connect
- AWS Outpost :white_check_mark:
- AWS RDS

#### Explanation

With AWS Outposts you can run Amazon EC2, Amazon EBS, container-based services such as Amazon EKS, database services such as Amazon RDS on AWS Outposts and analytics services such as Amazon EMR on-premises. This enables you to extend your Amazon Virtual Private Cloud on-premises and run some AWS services locally on Outposts hosted on your own Datacentre.

The answer, ‘AWS RDS’ is incorrect as this is a database service. Although you can also now run RDS on VMware which is an on-premise solution

The answer, ‘AWS Direct Connect’ is incorrect as although it enables you to connect your datacentre to your VPC in the cloud over AWS private links, you cannot use it to host EC2 or EBS services on-premise.

The answer, ‘AWS Route53’ is incorrect as Route53 is a DNS and traffic routing service offered by AWS.

Ref: https://youtu.be/c-SZB0AabAc



### 11. Question 40: **Incorrect**

Which AWS service enables you to monitor and have consistent visibility and network traffic controls for every microservice in an application, such that you can quickly pinpoint the exact location of errors and automatically re-route network traffic when there are failures or when code changes need to be deployed?

- App Mesh :white_check_mark:
- CloudFront
- Amazon Polly
- Amazon Macie

#### Explanation

AWS App Mesh makes it easy to monitor and control microservices running on AWS. App Mesh standardizes how your microservices communicate, giving you end-to-end visibility, and helping to ensure high availability for your applications.

Amazon CloudFront is not the correct answer. Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment

Amazon Polly is not the correct answer. Amazon Polly is a service that turns text into lifelike speech. Polly lets you create applications that talk, enabling you to build entirely new categories of speech-enabled products. Polly is an Amazon artificial intelligence (AI) service that uses advanced deep learning technologies to synthesize speech that sounds like a human voice. Polly includes 47 lifelike voices spread across 24 languages, so you can select the ideal voice and build speech-enabled applications that work in many different countries.

Amazon Macie is not the correct answer. It is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. Amazon Macie recognizes sensitive data such as personally identifiable information (PII) or intellectual property (such as your corporate application source codes) and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved.



### 12. Question 41: **Incorrect**

Which mode of Amazon ECS allows you to have control and manage your cluster of servers and schedule placement of containers on the servers?

- Amazon RDS
- EC2 Launch Type :white_check_mark:
- Fargate Launch Type
- Amazon EC2

#### Explanation

With the EC2 launch type, you can use Amazon ECS to manage a cluster of servers and schedule placement of containers on the servers.

With the Fargate launch type, all you have to do is package your application in containers, specify the CPU and memory requirements, define networking and IAM policies, and launch the application. EC2 launch type allows you to have server-level, more granular control over the infrastructure that runs your container applications. Thus, Fargate is an incorrect answer.

Both EC2 and RDS have nothing to do with ECS Services and are incorrect answers

Ref: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html





### 13. Question 43: **Incorrect**

Your company uses Amazon RDS for certain databases it hosts on AWS. Amazon also offers you the ability to use the same RDS technology on-premise. Which AWS service enables you to deploy Amazon RDS services on-premise, bringing the same benefits of easy to set up, operate, and scale databases to your on-premises deployments?

- Amazon Direct Connect
- Amazon VPN
- Storage Gateway
- Amazon RDS on VMware :white_check_mark:

#### Explanation

Amazon Relational Database Service (RDS) on VMware lets you deploy managed databases in on-premises VMware environments using the Amazon RDS technology enjoyed by hundreds of thousands of AWS customers. RDS on VMware allows you to utilize the same simple interface for managing databases in on-premises VMware environments as you would use in AWS.

Amazon VPN and Direct Connect related to network connectivity between on-premise and AWS but do not let you host Amazon RDS on-premise by itself.

Amazon Storage Gateway allows you to connect your applications to Amazon S3 Storage Services.

Ref: https://youtu.be/JHVSesLmWkY



### 14. Question 46: **Incorrect**

Which service of the AWS Global Infrastructure enables you to distribute your content (videos, images, documents) such that they are cached locally for low latency access when your users try to download them?

- Regions
- ElastiCache
- Route53
- Edge Locations :white_check_mark:

#### Explanation

Amazon hosts many Points of Presence locations that comprise of Edge Locations and Regional Edge Caches. Together they enable Amazon CloudFront to offer a content delivery network enabling the distribution of content across the globe in a fast and efficient manner and to cache content locally for a minimum duration which reduces latency.

In addition to standard Edge Locations, Regional Edge Caches have larger cache-width than any individual edge location, so your objects remain in cache longer at these locations. This helps keep more of your content closer to your viewers, reducing the need for CloudFront to go back to your origin web server, and improving overall performance for viewers. For instance, Amazon’s edge locations in Europe now go to the regional edge cache in Frankfurt to fetch an object before going back to your origin web server.

The answer ‘Regions’ is incorrect because Regions are geographical areas that host Availability Zones comprising of datacentres where you build, design, and deploy your applications. Regions themselves do not cache any data unless you configure any of the caching services available in each region.

The answer Route53 is incorrect because Route53 is a DNS and Traffic Routing service and does not perform any caching itself.

Ref: https://youtu.be/AT-nHW3_SVI



### 15. Question 47: **Incorrect**

Which AWS Service provides you with static IP addresses that serve as a fixed entry point to your applications, thereby ensuring that you don’t need to make any client-facing changes or update DNS records as you modify or replace endpoints such as Application Load Balancers to connect to your application?

- AWS Global Accelerator :white_check_mark:
- AWS VPN
- AWS NACL
- AWS Elastic IPs

#### Explanation

AWS Global Accelerator is a service that improves the availability and performance of your applications with local or global users. It provides static IP addresses that act as a fixed entry point to your application endpoints in a single or multiple AWS Regions, such as your Application Load Balancers, Network Load Balancers, or Amazon EC2 instances.

The answer, ‘AWS NACL’, is incorrect. AWS NACLs are VPC firewalls that protect subnets in your VPC where you define what types of IP traffic can be allowed into the subnet

The answer, ‘AWS Elastic IPs’, is incorrect. Elastic IPs are designed to provide static IP Address to individual EC2 Instances and are regionally specific. So if you are changing your load balancers or even EC2 Instances across regions, this will not provide global static IP Addressing for you.

The answer, ‘AWS VPN’, is incorrect. AWS VPN enables you to connect your on-premise networks to your VPC in the cloud.

Reg: https://youtu.be/GAxrPQ3ycsQ



### 16. Question 49: **Incorrect**

Which AWS service can be used to run a piece of code which can create thumbnails of images uploaded to one Amazon S3 bucket and copy them copied to another S3 Bucket?

- AWS RDS
- AWS Lambda :white_check_mark:
- AWS Snowball
- AWS SNS

#### Explanation

AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. Services such as Amazon S3 can invoke your function directly. This can then be used to invoke your image transformation code when an object is created in the S3 Bucket such as from a successful upload of the original image. There is no need to manage servers.

The answer, ‘AWS SNS’ is incorrect as it is used to send out a notification to endpoints you define. While it can be used in the above use case for notification purpose you cannot use to run code against a trigger or event.

The answer, ‘AWS RDS’ is incorrect as RDS is Amazon’s relational database service and has nothing to do with this question.

The answer, ‘AWS Snowball’ is incorrect as Amazon Snowball is used to migrate large amounts of data from on-premise to Amazon S3 using securely enclosed disks and is an offline data migration and transfer process.

Ref: https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html



### 17. Question 52: **Incorrect**

Which AWS Service can be used to analyze your data held in Amazon S3 using standard SQL queries, without having to set up and manage any servers or data warehouses?

- Amazon DynamoDB
- Amazon RDS
- Amazon Kinesis
- Amazon Athena :white_check_mark:

#### Explanation

Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.

The answer, ‘Amazon RDS’ is incorrect. Amazon RDS is a relational database service and would require you to export the data held in S3 into the RDS platform before you could analyze it. Amazon RDS is also a server-based database solution where you pay for the instance type and storage used.

The answer, ‘Amazon DynamoDB’ is incorrect. Amazon DynamoDB is a NoSQL database solution. While it is serverless, you are required to export the data from S3 into DynamoDB if you wish to use DynamoDB to analyze that same data.

The answer, ‘Amazon Kinesis’ is incorrect. Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. However, to use Kinesis, you would need to stream data from S3 if that is where data is held into a Kinesis stream first. Generally, another service Amazon Kinesis Firehose can be used to transfer large sets of data into an S3 bucket form external sources.

Ref: https://aws.amazon.com/athena/



### 18. Question 54: **Incorrect**

Which of the following statements is a valid reason for choosing a specific AWS Region to deploy your applications in? (Choose 2 answers)

- Selecting a specific AWS region ensures that your IT Administrators can visit your local AWS datacentre to install physical servers without having to travel to another country

- Ensure that IAM users created are specific to a given region

- Selecting a specific AWS region ensures that you can comply with data sovereignty laws and compliance

  :white_check_mark:

- Selecting a specific AWS region enables you to ensure that your application is closer to your end-users and offers low latency connectivity :white_check_mark:

- Launching EC2 Instances using your own AMIs

#### Explanation

The main reasons for selecting a specific AWS region to deploy your applications include proximity to end-users to ensure low latency connectivity, data protection, and sovereignty as well as for DR purposes. For example, you may be required to host a copy of your data 5000 miles away.

Selecting a specific region so that IT Administrators can visit the datacentre is not a valid answer as customers are not allowed to visit AWS datacentres.

Launching EC2 Instances using your own AMIs can be carried out in any region as you can copy the AMI to the region where you wish to launch an EC2 Instance

Ensuring IAM users are created in a specific region is not a valid answer because IAM is a global service and all IAM users are unique across the globe in your AWS account.

Ref: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html



### 19. Question 55: **Incorrect**

Which of the following AWS Services is a better option to securely grant necessary permissions to a web application running on an EC2 Instance, that needs access to digital assets hosted on an S3 Bucket?

- Access Keys
- IAM Group
- IAM Role :white_check_mark:
- Security Group

#### Explanation

An IAM role is an IAM entity that defines a set of permissions for making AWS service requests. IAM roles are not associated with a specific user or group. Instead, trusted entities assume roles, such as IAM users, applications, or AWS services such as EC2.

The answer “Access Keys” is incorrect because it is not a better option. You can use Access Keys to grant an application permission to access other AWS Services. However, Access Keys used in this manner carry a security risk if exposed and require management overhead with regards to ensuring key rotation on a regular basis.

The answer “IAM Groups” is incorrect because IAM Groups are containers that can host IAM Users. You can then assign permissions to the Group. However, applications can not be members of the group.

The answer “Security Group” is incorrect because Security Groups are firewalls that you attach to EC2 instances to enable inbound and outbound traffic on specific ports. Security Groups cannot be used to provide any access permissions required for the above use case.



### 20. Question 56: **Incorrect**

Which feature of the AWS EC2 Services helps to prevent the accidental termination of an EC2 Instance by preventing the user from issuing a termination command either from the console or CLI?

- Enable ‘Termination Protection’ :white_check_mark:
- Enable ‘Prevent Termination’
- Enable ‘Protect EC2’
- Enable ‘Termination Protect’

#### Explanation

To help protect against data loss caused by accidental termination of an Amazon EC2 instance, you can enable the ‘Termination Protection’ feature which prevents an instance from being accidentally terminated by requiring that you disable the protection before terminating the instance

The other options listed are distractors and do not exist on the platform.

Ref: https://youtu.be/hhWJxqzIB_k



### 21. Question 58: **Incorrect**

Which AWS service enables you to perform search, analysis, and visualize data in real-time with features such as full-text search?

- Amazon Visualizer
- Amazon CloudMap
- Amazon Elastisearch :white_check_mark:
- Amazon Shield

#### Explanation

Amazon Elasticsearch Service makes it easy to deploy, secure, operate, and scale Elasticsearch to search, analyze, and visualize data in real-time. With Amazon Elasticsearch Service, you get easy-to-use APIs and real-time Amazon Web Services – Overview of Amazon Web Services analytics capabilities to power use-cases such as log analytics, full-text search, application monitoring, and clickstream analytics, with enterprise-grade availability, scalability, and security.

There is no such service as the Amazon Visualizer and so this answer is incorrect.

Amazon Shield is incorrect. AWS Shield offers DDoS protection that helps to safeguard your applications running on AWS. AWS offers two tiers of the service – AWS Shield Standard and AWS Shield Advanced.

Amazon CloudMap is incorrect. AWS Cloud Map is a cloud resource discovery service. With Cloud Map, you can define custom names for your application resources, and it maintains the updated location of these dynamically changing resources. This increases your application availability because your web service always discovers the most up-to-date locations of its resources.

Ref: https://youtu.be/4Zw1IOxW-oA



### 22. Question 59: **Incorrect**

Which AWS service helps you identify potential unused resources such as Elastic IP Addresses that are not attached to a running instance, and thus highlight opportunities to save on costs?

- AWS EC2 Pricing Chart
- AWS Budgets
- AWS Trusted Advisor :white_check_mark:
- AWS Cost Explorer

#### Explanation

AWS Trusted Advisor offers recommendations that can potentially save you money by highlighting unused resources and opportunities to reduce your bill.

The answer, ‘AWS Cost Explorer; is incorrect. AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. However, it will not alert you to opportunities to save money by identifying any unused resources that you have deployed. You would have to review the itemized bill yourself work out which resources are being used and which aren’t.

The answer, ‘AWS EC2 Pricing Chart’ is incorrect. There is no alert option to identify unused resources.

The answer, ‘AWS Budgets’ is incorrect. AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount. However, as a service, it will not alert you to opportunities to save money by identifying any resource you are not using.

Ref: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/



### 23. Question 60: **Incorrect**

> Remember: IAM policies are written in JSON format only
>
> AWS CloudFormation - Infrastructure as Code, supports both YAML & JSON

Which format are IAM Policy documents written in?

- JAVA
- XML
- YAML
- JSON :white_check_mark:

#### Explanation

IAM Policy documents are written in JSON format. The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. 

The answer “YAML” is incorrect. YAML is a language used to create CloudFormation Templates. You can also create CloudFormation templates using JSON

The answers “XML” and “JAVA” are incorrect.

Ref: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json



# Second Attempt

> 92%

### 24. Question 17: **Incorrect**

Your administrators need to access your AWS environment using the command-line interface to perform certain specific functions. Which login method do you need to provide them to grant them access via the CLI?

- SSL Certificate
- Access Keys :white_check_mark:
- Snowball
- IAM Username and Password

#### Explanation

In other to grant access via the Command Line Interface (CLI) users require Access Keys IDs and Secret Access Keys.

IAM Username and Passwords can only grant you access with the AWS Management Console and so this answer is incorrect.

An SSL Certificate is generally used to encrypt traffic to webservers and so this answer is incorrect.

Amazon Snowball is a service that enables you to migrate data from your on-premise environment to Amazon S3 by using physical disk enclosure units. These units are shipped to your datacentre where you copy the data to and then send it back to Amazon to have the data imported to your S3 buckets.



### 25. Question 22: **Incorrect**

Which AWS database solution enables you to build a complete data warehousing solution, capable of handling complex analytic queries against petabytes of structured data using standard SQL and industry recognized Business Intelligence (BI) tools?

- AWS Redshift :white_check_mark:
- AWS DynamoDB
- AWS Pluto
- AWS Neptune :scream:

#### Explanation

Amazon Redshift is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and your existing Business Intelligence (BI) tools. It allows you to run complex analytic queries against petabytes of structured data using sophisticated query optimization, columnar storage on high-performance storage, and massively parallel query execution.

Amazon DynamoDB is an incorrect answer as this is Amazon’s NoSQL solution designed to support modern web and mobile application solutions

Amazon Neptune is an incorrect answer because rather than a Datawarehouse solution, it is a fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets.

Amazon Pluto is an incorrect answer as there is no such service.

Ref: https://aws.amazon.com/redshift/features/



### 26. Question 26: **Incorrect**

Which component of the AWS System Manager service can be used to automate common administrative tasks like remotely executing shell scripts or PowerShell commands, installing software updates?

- Maintenance Window
- Run Command :white_check_mark:
- Patch Manager
- Parameter Store :x:

#### Explanation

The Run Command provides a simple way of automating common administrative tasks like remotely executing shell scripts or PowerShell commands, installing software updates, or making changes to the configuration of OS, software, EC2, and instances and servers in your on-premises data center.

The answer Maintenance Window is incorrect. This lets you define a recurring window of time to run administrative and maintenance tasks across your instances.

The answer, Patch Manager is incorrect. This component helps you select and deploy the operating system and software patches automatically across large groups of instances.

The answer Parameter Store is incorrect. This service provides an encrypted location to store important administrative information such as passwords and database strings and integrates with KMS.

Ref: https://youtu.be/MK4ZoCs-muo



### 27. Question 48: **Incorrect**

Which IAM service enables you to effectively manage users by creating a collection of them based on their job function and assigning them permissions according to their roles to the entire collective?

- Security Groups
- Group Policy Objects (GPOs)
- IAM Policies
- IAM Groups :white_check_mark:

#### Explanation

An IAM group is a collection of IAM users. Groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users. For example, you could have a group called *Admins* and give that group the types of permissions that administrators typically need. Any user in that group automatically has the permissions that are assigned to the group. If a new user joins your organization and needs administrator privileges, you can assign the appropriate permissions by adding the user to that group. Similarly, if a person changes jobs in your organization, instead of editing that user's permission, you can remove him or her from the old groups and add him or her to the appropriate new groups.

The answer, “IAM Policies” is incorrect as these are the permissions that you can apply to users or groups. IAM Policies do not let you create a collection of users.

The answer, “Security Groups” is incorrect as it relates to EC2 Instance and the ability to open inbound and outbound traffic on specific ports to those instances. They have nothing to do with IAM users.

The answer, “Group Policy Objects (GPOs)” is incorrect as there is no such term in AWS. This is a Microsoft term used to assign permissions to Active Directory users and groups.



### 28. Question 51: **Incorrect**

You have launched a VPC in your AWS Account. You have been asked if it is possible to establish connectivity from your on-premise network to the VPC enabling your Developers with seamless access to production workloads deployed in the VPC from the on-premise network. Which connectivity strategy will enable you to establish this connection over the standard public Internet while keeping costs to a minimum?

- Setup a Direct Connect Connection between on-premise network and VPC :x:
- Setup a Hardware VPC Connection between your on-premise network and the VPC :white_check_mark:
- This cannot be done
- Setup a Snowball Service

#### Explanation

You can create a hardware virtual private network (VPN) connection between your corporate data center and your VPC and leverage the AWS Cloud as an extension of your corporate data center.

You can alternatively use Direct Connect to configure connectivity between the on-premise network and the cloud. However, this is the most expensive and uses private network connectivity.

Ref: https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/network-to-amazon-vpc-connectivity-options.html



# Udemy Paper 02 Notes

> 76%

### 1. Question 4: **Incorrect**

Which IAM feature enables you to grant secure access to other AWS accounts?

- IAM Groups :x:
- IAM Users
- IAM Roles :white_check_mark:
- ExternalID

#### Explanation

IAM Roles enable you to grant granular permissions to trusted entities. This can include other AWS accounts for cross-account access. You can grant your IAM users permission to switch to roles within your AWS account or to roles defined in other AWS accounts that you own.

Ref: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_aws-accounts.html



### 2. Question 9: **Incorrect**

One of the five design principals of the Performance Efficiency Pillar suggests using a serverless architecture. Which of the following use cases lends itself well to using serverless architecture? (Choose 2 answers)

- Hosting a static website on an S3 Bucket :white_check_mark:
- Using a Bastion Host to schedule start and stop commands for your backend servers
- Using Lambda Functions to start and stop test servers :white_check_mark:
- Hosting a static website on an EC2 Instance

#### Explanation

Amazon S3 Buckets can be used to host static websites and are highly scalable without the need to manage and procure servers. Lambda Functions enable you to run code in response to triggers and CloudWatch Event Rules and are completely servers from the customers’ point of view.

EC2 Instances are virtual servers in the cloud and require management overhead as well as manual scaling to cope with load and traffic. EC2 Instances and Bastion Hosts are incorrect answers.

Ref: https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf



### 3. Question 11: **Incorrect**

Which AWS service makes it easy to deploy, manage, and scale containerized applications using Kubernetes on AWS

- Amazon ECS :x:
- Amazon EMR
- Amazon EC2
- Amazon EKS :white_check_mark:

#### Explanation

Amazon Elastic Kubernetes Service (Amazon EKS) is a fully managed Kubernetes service. Amazon EKS runs the Kubernetes management infrastructure for you across multiple AWS availability zones to eliminate a single point of failure. Amazon EKS is a certified Kubernetes conformant so you can use existing tooling and plugins from partners and the Kubernetes community. Applications running on any standard Kubernetes environment are fully compatible and can be easily migrated to Amazon EKS

The answer to Amazon ECS is incorrect. Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS. Amazon ECS eliminates the need for you to install and operate your own container orchestration software, manage and scale a cluster of virtual machines, or schedule containers on those virtual machines.

The answer to Amazon EC2 is incorrect. Amazon EC2 offers you virtual servers that run on the AWS platform in your own VPC. You can host both Linux and Windows-based servers in the cloud.

The answer to Amazon EMR is incorrect. Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Apache Spark, Apache Hive, Apache HBase, Apache Flink, Apache Hudi, and Presto. With EMR you can run Petabyte-scale analysis at less than half of the cost of traditional on-premises solutions and over 3x faster than standard Apache Spark.



### 4. Question 14: **Incorrect**

You are building an application for a Wealth Asset Management company which will be used to store portfolio data and transactions of stocks. Mutual funds and Forex purchased. To that end you require a backend database solution that will ensure a ledger-like functionality because they want to maintain an accurate history of their applications' data, for example, tracking the history of credits and debits for its customers. Which AWS Database Solution would you recommend for this business requirement?

- Amazon Redshift
- Amazon DynamoDB
- Amazon QLDB :white_check_mark:
- Amazon RDS :x:

#### Explanation

Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log ‎owned by a central trusted authority. Amazon QLDB tracks each application data change and maintains a complete and verifiable history of changes over time.

The answer, ‘Amazon RDS’ is not suitable for this requirement as the data is can be manipulated in an RDS database

The answer, ‘Amazon DynamoDB’ is not suitable for this requirement as it does not offer the key features of the immutability of data. DynamoDB is more suitable for mobile, web, gaming, ad tech, IoT, and other applications that need low-latency data access at any scale.

The answer, ‘Amazon Redshift’ is not suitable for this requirement as it is more suited to a data warehousing solution. With Redshift, you can query petabytes of structured and semi-structured data across your data warehouse and your data lake using standard SQL. Redshift lets you easily save the results of your queries back to your S3 data lake using open formats like Apache Parquet to further analyze from other analytics services like Amazon EMR, Amazon Athena, and Amazon SageMaker.

Ref: https://youtu.be/jcZ_rsLJrqk



### 5. Question 15: **Incorrect**

You are setting an AWS CloudFront distribution for a new video sharing web application. Your CFO would like to know the costs associated with using CloudFront. Which of the following is NOT required to estimate the cost of CloudFront?

- Number of Requests
- Traffic distribution :x:
- Data Transfer In :white_check_mark:
- Data Transfer Out

#### Explanation

When estimating the cost of setting up CloudFront, key factors that will determine the price include:

\- Traffic Distribution which varies across geographical areas

\- Number and type of requests (HTTP or HTTPS)

\- The amount of data transferred out of your CloudFront Edge Locations 

Ref: https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf



### 6. Question 16: **Incorrect**

Which of the following is true with regards to the benefits of purchasing a convertible EC2 Reserved Instance? (Choose 2 answers)

- You can exchange All Upfront and Partial Upfront Convertible Reserved Instances for No Upfront Convertible Reserved Instances.
- You can exchange one or more Convertible Reserved Instances at a time for both Convertible and Standard Reserved Instance
- To benefit from better pricing, you can exchange a No Upfront Convertible Reserved Instance for an All Upfront or Partial Upfront Convertible Reserved Instance. :white_check_mark:
- You can exchange one or more Convertible Reserved Instances for another Convertible Reserved Instance with a different configuration, including instance family, operating system, and tenancy :white_check_mark:
- You can exchange a Convertible Reserved Instance for a Convertible Reserved Instance in a different Region. :x:

#### Explanation

Convertible Reserved Instances carry several advantages over Standard Reserved Instances. For example, you can exchange one or more Convertible Reserved Instances for another Convertible Reserved Instance with a different configuration, including instance family, operating system, and tenancy. You can also exchange a No Upfront Convertible Reserved Instance for an All Upfront or Partial Upfront Convertible Reserved Instance.

For a list of permitted and non-permitted option ref to https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ri-convertible-exchange.html



### 7. Question 22: **Incorrect**

Which Amazon S3 service can you use to automatically migrate data from one storage class to another after a set number of days as a means of reducing your costs, especially where frequent instant access may not be required to that subset of data?

- Versioning
- Lifecycle Management :white_check_mark:
- Storage Transition
- S3 Migration :x:

#### Explanation

You can use Lifecycle Management to automatically move objects from one storage class to another for better management of costs. Two types of actions can be performed on your S3 Objects:

· Transition Actions – Defines when to move an object from one class to another. For example, you know after 90 days some files will be rarely accessed and so you can move them to a cheaper storage class.

· Expiration Actions – Define when an object is to be expired which deletes the object from S3. For example, you do not need to keep certain documents after 7 Years and so you can automatically delete these after the retention period to save on costs.

Ref: https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html



### 8. Question 26: **Incorrect**

Which AWS S3 service can be used to help prevent accidental deletion of objects?

- Shadow Copy Service
- Prevent Delete Option :x:
- Lifecycle Management
- Versioning :white_check_mark:

#### Explanation

Versioning is a means of keeping multiple variants of an object in the same bucket. You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket. With versioning, you can easily recover from both unintended user actions and application failures. When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of the objects.

Ref: https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html



### 9. Question 34: **Incorrect**

Your company manages a fleet of Windows EC2 instances in a VPC (Public/Private Subnet Configuration) for a client. Your team is connecting to the VPC over the Internet to manage the fleet of Amazon EC2 instances running in both the public and private subnets. You have not yet gotten the approval to configure a site-to-site VPN tunnel from your offices to the client’s VPC. 

You have added a bastion host with Microsoft Remote Desktop Protocol (RDP) access to the application instance in the private subnet, but the client wants to further limit administrative access to all of the instances in the VPC. 

Which of the following bastion host deployment options will meet this requirement?

- Deploy the Bastion Host in the Private Subnet and configure it with an Elastic IP Address and a Security Group to accept incoming RDP traffic from only your corporate IP Address :x:
- Configure the Bastion Host to accept only incoming SSH traffic. Disable RDP access to the Bastion host
- Set up a Direct Connect Link between your office and the client’s VPC
- Configure the Bastion Host in the Public Subnet with an Elastic IP and a Security Group to accept incoming RDP traffic from only your corporate IP Address :white_check_mark:

#### Explanation

By limiting access to the Bastion host from your corporate IP Address, you further protect the instance from malicious attacks from anywhere else. You cannot place a Bastion Host in the Private subnet with a Public IP address as that configuration will not work. SSH traffic is applicable for Linux based instances only, and setting up a Direct Connect is a bit of overkill.



### 10. Question 36: **Incorrect**

Which AWS service enables you to configure multiple Windows-based EC2 Instances to share and access a common storage solution that is based on using the industry-standard SMB protocol and eliminate the administrative overhead of managing Windows file servers?

- Amazon Elastic File System :x:
- Amazon Elastic Block Store
- Amazon DFS Volumes for Windows File Server
- Amazon FSx for Windows File Server :white_check_mark:

#### Explanation

Amazon FSx for Windows File Server provides a fully managed native Microsoft Windows file system so you can easily move your Windows-based applications that require file storage to AWS. Built on Windows Server, Amazon FSx provides shared file storage with the compatibility and features that your Windows-based applications rely on, including full support for the SMB protocol, Windows NTFS, and Active Directory (AD) integration. Amazon FSx uses SSD storage to provide the fast performance your Windows applications and users expect, with high levels of throughput and IOPS, and consistent sub-millisecond latencies.

The answer “Amazon Elastic File System” is incorrect as this file system accessed using the NFS protocol and designed for Linux based servers.

The answer “Amazon Elastic Block Store” is incorrect as EBS Volumes cannot be used as a shared storage solution across multiple EC2 Instances

The answer “Amazon DFS Volumes for Windows File Server” is incorrect as there is no such service.

### 11. Question 39: **Incorrect**

Which of the following determines the price of S3? (Choose 3 answers).

- EBS Type
- Data Transfer Out :white_check_mark:
- Storage Class :white_check_mark:
- Amount of Storage :white_check_mark:
- EFS Volumes :x:

#### Explanation

There is no minimum fee. There are four cost components to consider when deciding on which S3 storage class best fits your data profile – storage pricing, request and data retrieval pricing, data transfer and transfer acceleration pricing, and data management features pricing.

Ref: https://aws.amazon.com/s3/pricing/



### 12. Question 41: **Incorrect**

Which S3 storage class would you recommend for hosting data that is quickly accessible but infrequently accessed and can also be re-created if required hence offers even cheaper storage costs?

- S3 Standard
- S3 One Zone IA :white_check_mark:
- S3 Infrequent Access (IA) :x:
- Glacier

#### Explanation

S3 One Zone-IA is intended for use cases with infrequently accessed data that is re-creatable, such as storing secondary backup copies of on-premises data or for storage that is already replicated in another AWS Region for compliance or disaster recovery purposes. With S3 One Zone-IA, customers can now store infrequently accessed data within a single Availability Zone at 20% lower cost than S3 Standard-IA. 

Ref: https://aws.amazon.com/s3/storage-classes/



### 13. Question 56: **Incorrect**

As part of implementing change management, which AWS service can be used to assess, audit, and evaluate change configurations of your AWS resources, enabling you to identify if a change was the cause of an incident?

- AWS CloudWatch
- AWS Config :white_check_mark:
- AWS Outpost
- AWS CloudTrail :x:

#### Explanation

With AWS Config, you can track the relationships among resources and review resource dependencies prior to making changes. Once a change occurs, you can quickly review the history of the resource's configuration and determine what the resource’s configuration looked like at any point in the past. Config provides you with information to assess how a change to a resource configuration would affect your other resources, which minimizes the impact of change-related incidents.

The answer, ‘AWS CloudTrail’ is incorrect. You can use CloudTrail to view, search, download, archive, analyze, and respond to account activity across your AWS infrastructure. You can identify who or what took which action, what resources were acted upon, when the event occurred, and other details to help you analyze and respond to activity in your AWS account.

The answer, ‘AWS CloudWatch’ is incorrect. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events, providing you with a unified view of AWS resources, applications, and services that run on AWS and on-premises servers.

The answer, ‘AWS Outpost’ is incorrect. AWS Outposts is a fully managed service that extends AWS infrastructure, AWS services, APIs, and tools to virtually any data center, co-location space, or on-premises facility for a truly consistent hybrid experience.

Ref: https://youtu.be/MJDuAvNEv64

Ref: https://aws.amazon.com/config/



### 14. Question 64: **Incorrect**

Which AWS Services enables developers to create, publish, maintain, monitor, and secure APIs for serverless applications that need to access data, business logic, or functionality from your backend services?

- EC2 Instances
- API Gateway :white_check_mark:
- Route53
- Lambda Functions :x:

#### Explanation

Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services. Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications. API Gateway supports containerized and serverless workloads, as well as web applications.

The answer, ‘Lambda Functions’, is incorrect. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.

The answer, ‘EC2 Instances’, is incorrect. Amazon EC2 presents a true virtual computing environment, allowing you to use web service interfaces to launch instances with a variety of operating systems, load them with your custom application environment, manage your network’s access permissions, and run your image using as many or few systems as you desire.

The answer, ‘Route53’, is incorrect. Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other. Amazon Route 53 is fully compliant with IPv6 as well.

Ref: https://aws.amazon.com/api-gateway/



### 15. Question 65: **Incorrect**

Which configuration feature of the AWS Auto Scaling service enables you to define a maximum number of EC2 Instances that can be launched in your fleet?

- Auto Scaling Policy
- Auto Scaling Launch Configuration :x:
- Auto Scaling Group :white_check_mark:
- Auto Scaling MaxFleet Size

#### Explanation

When configuring your Auto Scaling Group, you can define the minimum and maximum size of your group. You can also choose to keep the size of the group to an initial size which does not expand the group size but ensure that you always have the exact number of EC2 Instance running.

The answer, ‘Auto Scaling Launch Configuration’ is incorrect because this is where you define the parameters for your EC2 Instance such as AMI, Instance Type, Key pairs, etc. You cannot define your group size here.

The answer, ‘Auto Scaling MaxFleet Size’ is incorrect as there is no such option

The answer, Auto Scaling Policy’, is incorrect as this is where you define the parameters that will trigger and launch or termination of an EC2 Instance. The size of the group, however, will still be maintained by the Auto Scaling Group configuration

Ref: https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html



# Second Attempt

> 92% 

### Question 02

You work for a web application development company and have been asked to design an infrastructure solution which can be repeatedly created using scripted templates to create individual sandbox environments for your developers to use. Some infrastructure components will include the setup and configuration of a VPC, EC2 Instances, S3 buckets etc. Which AWS service enables you to design an infrastructure template that can be deployed to create repeatable infrastructure for your developers to use as a sandbox environment?

- AWS System Manager :scream:
- AWS Config
- AWS CloudFormation :white_check_mark:
- AWS FSx for Lustre

#### Explanation

AWS CloudFormation gives developers and systems administrators an easy way to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion. You can use AWS CloudFormation’s sample templates or create your own templates to describe the AWS resources, and any associated dependencies or runtime parameters, required to run your application. You don’t need to figure out the order for provisioning AWS services or the subtleties of making those dependencies work. CloudFormation takes care of this for you. After the AWS resources are deployed, you can modify and update them in a controlled and predictable way, in effect applying version control to your AWS infrastructure the same way you do with your software.

The answer, ‘AWS System Manager’, is incorrect. With Systems Manager, you can group resources, like Amazon EC2 instances, Amazon S3 buckets, or Amazon RDS instances, by application, view operational data for monitoring and troubleshooting, and take action on your groups of resources.

The answer, ‘AWS Config’, is incorrect. AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations

The answer, ‘AWS FSx for Lustre’, is incorrect. Amazon FSx for Lustre makes it easy and cost-effective to launch and run a high-performance file system. Use it for workloads where speed matters, such as machine learning, high-performance computing (HPC), video processing, and financial modeling.

Ref: https://youtu.be/Omppm_YUG2g



### Question 11

Which of the following six advantages of cloud computing enables you to achieve massive savings by avoiding hidden costs when compared to an on-premise infrastructure design?

- Increase speed and agility
- Stop spending money running and maintaining data centers :white_check_mark:
- Trade capital expense for variable expense
- Stop guessing capacity



### Question 20: 

Where can you set up Billing Alarms?

- CloudWatch :white_check_mark:
- Trusted Advisor
- EC2 Dashboard
- AWS Shield



### Question 21

Which of the following are examples of Amazon AWS Certifications and Attestations for Compliance? (Choose 3 answers)

- SOC 3
- VIP
- PCI DSS Level1
- XIP
- ISO 27001



### Question 24

You are planning on developing a website in multiple languages such that you have one fleet of EC2 Instances which serves the English version of your site and another fleet that serves the Spanish version of your site. For each language version, you will be configuring URLs with different paths such that the English version of your site will contain /en/ in the path, and the Spanish version will contain /es/.

Which type of Load Balancer would you use to route traffic to ensure users connect to the site in their desired language?

- Network Load Balancer
- Path-Based Load Balancer
- Classic Load Balancer
- Application Load Balancer



### Question 28

Which AWS Service can be used to automatically select and deploy operating system software patches automatically across large groups of instances?

- AWS CloudWatch
- AWS System Centre Configuration Manager
- AWS Inspector
- AWS System Manager Patch Manager



### Question 31

Which AWS Report gives enables you to view line items for each unique combination of AWS product, usage type, and operation that your AWS account uses?

- AWS Artifact
- AWS Single Bill
- AWS Cost and Usage Report
- AWS Cost Management Report



### Question 33

Which service in AWS protects your virtual network and resources from common Distributed Denial of Service (DDoS) attacks?

- Amazon Macie
- AWS Shield
- AWS WAF
- AWS CloudFront



### Question 35

Which AWS Database engine offers up to five times faster than standard MySQL databases and three times faster than standard PostgreSQL databases?

- MS SQL
- Oracle
- Amazon Aurora :white_check_mark:
- DynamoDB



### Question 36

Your company provides an Options market trading service. You wish to run the end of day analysis against the day’s transaction costs, perform execution reporting, and conduct market performance analysis. Which AWS service provides Managed Compute Environments that dynamically provisions and scale compute resources based on the volume and resource requirements of your submitted jobs?

- AWS Lambda
- AWS Batch :white_check_mark:
- AWS CloudFront
- AWS Blockchain



### Question 38: 

You wish to automatically start your fleet of servers used to an Accounting application every morning at 6 am and then shut down the servers at night at 6 pm. This will help reduce overall costs. You plan to use Cloud Events and create cron/scheduled job for this. Which AWS service can enable you to run a node.js code to perform the actual start and stop request, triggered from the scheduled CloudWatch Events Rule?

- AWS EC2Stop
- AWS CloudTrail
- AWS Outpost
- AWS Lambda



### Question 43

As part of ensuring operational excellence, you are required to monitor your EC2 service health in terms of load and traffic to and from those servers. Which AWS service will enable you to build dashboards to get a quick one pane health view of your EC2 farm?

- AWS Cognito
- AWS Config
- System Centre Configuration Manager (SCCM)
- AWS CloudWatch :white_check_mark:

#### Explanation

Amazon CloudWatch dashboards enable you to create re-usable graphs and visualize your cloud resources and applications. You can create graph metrics and logs data side by side in a single dashboard pane to quickly get the context and go from diagnosing the problem to understanding the root cause. For example, you can visualize key metrics, like CPU utilization and memory, and compare them to capacity.

The answer, ‘AWS Config’ is incorrect. While Config can enable you to identify historical changes to your resources deployed on AWS, it does not offer the ability to create dashboards of current health states in terms of CPU Utilization, disk read ops, and network bytes in and about type visual representations.

The answer, ‘AWS Cognito’ is incorrect. Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0.

The answer, ‘System Centre Configurations Manager (SCCM)’ is incorrect as there is no such service on AWS. This is a Microsoft tool for managing resource configurations.

Ref: https://youtu.be/a4dhoTQCyRA

### Question 49

Which AWS service enables you to set custom cost and usage budgets to manage your AWS spend more easily?

- AWS Shield
- AWS Budgets
- AWS TCO
- AWS Billing Alarm



### Question 52

Which feature of the Amazon S3 platform enables you to upload content to a centralized bucket from across any location, such that the data is uploaded via AWS Edge Locations ensuring faster transfer speeds and avoidance of general public Internet congestion?

- Amazon S3 Transfer Acceleration :white_check_mark:
- Amazon S3 Storage Gateway
- Amazon Snowball
- Availability Zones



### Question 55

Which Elastic Load Balancer is ideal for handling volatile workloads and can scale to millions of requests per second?

- Classic Load Balancer
- Premium Load Balancer
- Application Load Balancer
- Network Load Balancer :white_check_mark:



### Question 58

Which of the following is true regarding the Amazon Simple Storage Service (Amazon S3)? (Select 2 answers)

- Amazon S3 is Block-Based Storage
- Amazon S3 can be configured as shared mount volumes for Linux based EC2 Instances
- Amazon S3 Standard Storage Class offers 99.999999999 Durability :white_check_mark:
- You can install non-compatible RDS database engines not available on Amazon RDS
- Amazon S3 is Object-Based Storage :white_check_mark:



### Question 64: **Incorrect**

Your organization is looking to replace its old desktops and laptops with thin clients and virtual desktop infrastructure in the cloud. Which AWS service offers you the ability to host Windows desktops quickly and at a fraction of the costs of traditional VDI deployments?

- AWS EC2
- AWS Workspaces :white_check_mark:
- AWS RDS
- AWS S3

#### Explanation

Amazon WorkSpaces is a fully managed, secure cloud desktop service. You can use Amazon WorkSpaces to provision either Windows or Linux desktops in just a few minutes and quickly scale to provide thousands of desktops to workers across the globe. You can pay either monthly or hourly, just for the WorkSpaces you launch, which helps you save money when compared to traditional desktops and on-premises VDI solutions.

AWS EC2 enables you to deploy virtual servers such as Windows and Linux servers and not desktops so this answer is incorrect.

AWS RDS is a managed database solution and AWS S3 is Amazon Object Storage solutions. These answers are incorrect.

Ref: https://youtu.be/TGXQrk4dmI8