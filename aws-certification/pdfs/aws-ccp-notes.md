# Udemy Paper 01 Notes

>  [Paper 01 Link on Udemy](https://www.udemy.com/course/aws-certified-cloud-practitioner-clf-c01/learn/quiz/4972024/result/412366430#overview)

### Question 6: **Incorrect**

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



### Question 7: **Incorrect**

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



### Question 11: **Incorrect**

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



### Question 13: **Incorrect**

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



### Question 15: **Incorrect**

You are building a multi-tier architecture with web servers placed in the public subnet and application servers placed in the private subnet of your VPC. You need to deploy Elastic Load Balancers to distribute traffic to both the web-server farm and the application server farm. Which type of load balancer would you choose to distribute traffic to your application servers?

- Internet-facing
- Static load balancers
- Internal load balancers :white_check_mark:
- Dynamic load balancers

#### Explanation

When you create a load balancer, you must choose whether to make it an internal load balancer or an internet-facing load balancer. In a multi-tier architecture, as described above, you would deploy an internal load balancer to distribute traffic from the webservers to the application servers. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer.

The answer “Internet-facing” is incorrect as this configuration is used to support traffic the web-servers from users on the Internet

The answers “Dynamic load balancers” and “Static load balancers” are incorrect as there is no such service.

Ref: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme



### Question 21: **Incorrect**

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



### Question 26: **Incorrect**

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



### Question 27: **Incorrect**

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



### Question 28: **Incorrect**

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



### Question 36: **Incorrect**

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



### Question 40: **Incorrect**

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



### Question 41: **Incorrect**

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





### Question 43: **Incorrect**

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



### Question 46: **Incorrect**

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



### Question 47: **Incorrect**

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



### Question 49: **Incorrect**

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



### Question 52: **Incorrect**

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



### Question 54: **Incorrect**

Which of the following statements is a valid reason for choosing a specific AWS Region to deploy your applications in? (Choose 2 answers)

- 

  Selecting a specific AWS region ensures that your IT Administrators can visit your local AWS datacentre to install physical servers without having to travel to another country

- 

  Ensure that IAM users created are specific to a given region

  (Incorrect)

- 

  Selecting a specific AWS region ensures that you can comply with data sovereignty laws and compliance

  (Correct)

- 

  Selecting a specific AWS region enables you to ensure that your application is closer to your end-users and offers low latency connectivity

  (Correct)

- 

  Launching EC2 Instances using your own AMIs

#### Explanation

The main reasons for selecting a specific AWS region to deploy your applications include proximity to end-users to ensure low latency connectivity, data protection, and sovereignty as well as for DR purposes. For example, you may be required to host a copy of your data 5000 miles away.

Selecting a specific region so that IT Administrators can visit the datacentre is not a valid answer as customers are not allowed to visit AWS datacentres.

Launching EC2 Instances using your own AMIs can be carried out in any region as you can copy the AMI to the region where you wish to launch an EC2 Instance

Ensuring IAM users are created in a specific region is not a valid answer because IAM is a global service and all IAM users are unique across the globe in your AWS account.

Ref: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html



### Question 55: **Incorrect**

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



### Question 56: **Incorrect**

Which feature of the AWS EC2 Services helps to prevent the accidental termination of an EC2 Instance by preventing the user from issuing a termination command either from the console or CLI?

- Enable ‘Termination Protection’ :white_check_mark:
- Enable ‘Prevent Termination’
- Enable ‘Protect EC2’
- Enable ‘Termination Protect’

#### Explanation

To help protect against data loss caused by accidental termination of an Amazon EC2 instance, you can enable the ‘Termination Protection’ feature which prevents an instance from being accidentally terminated by requiring that you disable the protection before terminating the instance

The other options listed are distractors and do not exist on the platform.

Ref: https://youtu.be/hhWJxqzIB_k



### Question 58: **Incorrect**

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



### Question 59: **Incorrect**

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



### Question 60: **Incorrect**

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