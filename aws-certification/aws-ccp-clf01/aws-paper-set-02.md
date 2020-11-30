# Udemy Paper 03 Notes

> [Udemy Paper 03 Link](https://www.udemy.com/course/aws-certified-cloud-practitioner-practice-exams-c/learn/quiz/4550439/test#overview)
>
> First Attempt: 76% :sweat:



### Question 3: 

Under the shared responsibility model, what are examples of shared controls? (Select TWO.)

- Service and Communications Protection

- Patch management :white_check_mark:

- Physical and environmental

- Configuration management :white_check_mark:

- Storage system patching

  

### Question 4

Which benefits can an organization achieve by deploying AWS Global Accelerator? (Select TWO.)

- Reduces the cost of deploying global services on AWS.
- It caches content around the world to reduce latency.
- Decreased latency to reach applications deployed on AWS.
- Improves the availability of applications on AWS.
- It increases the durability of data stored on Amazon S3.



### Question 7

What considerations are there when choosing which region to use? (Select TWO.)

- Data sovereignty  
- Available storage capacity  
- Available compute capacity  
- Latency  
- Pricing in local currency  



### Question 9

When storing sensitive company data in Amazon S3, which security best practices should customers follow?

- Enable cross-Region replication on the S3 bucket.
- Enable AWS WAF to restrict access to the bucket.
- Enable requester pays to reduce costs.
- Enable S3 server-side encryption on the S3 bucket.



### Question 31

Which feature of Amazon Rekognition can assist with saving time?

- Identification of objects in images and videos  
- Adds automatic speech recognitions (ASR) to applications
- Identification of the language of text in a document
- Provides on-demand access to compliance-related information



### Question 32

What can you use to quickly connect your office securely to your Amazon VPC?  

- Direct Connect
- Internet Gateway
- Route Table  
- AWS managed VPN



### Question 42: 

What method can you use to take a backup of an Amazon EC2 instance using AWS tools?

- Take full and incremental file-level backups using the backup console  
- Take a snapshot to capture the point-in-time state of the instance  
- Take application-consistent backups using the EC2 API  
- Use Cross Region Replication (CRR) to copy the instance to another region 



### Question 42

What method can you use to take a backup of an Amazon EC2 instance using AWS tools?

- Take full and incremental file-level backups using the backup console  
- Take a snapshot to capture the point-in-time state of the instance  
- Take application-consistent backups using the EC2 API  
- Use Cross Region Replication (CRR) to copy the instance to another region  



# Incorrect Answers



### Question 2: **Incorrect**

For which services does Amazon not charge customers? (Select TWO.)

- AWS CloudFormation :white_check_mark:
- Amazon VPC :white_check_mark:
- Amazon EBS
- Amazon SNS :x:
- Amazon S3 :x:

#### Explanation

Amazon VPC and CloudFormation are free of charge, however in the case of CloudFormation you pay for the resources it creates.

All other answers are chargeable services.

**CORRECT:** "Amazon VPC" is a correct answer.

**CORRECT:** "AWS CloudFormation" is also a correct answer.

**INCORRECT:** "Amazon EBS" is incorrect as this is a chargeable service.

**INCORRECT:** "Amazon S3" is incorrect as this is a chargeable service.

**INCORRECT:** "Amazon SNS" is incorrect as this is a chargeable service.

**References:**

https://aws.amazon.com/pricing/services/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/aws-billing-and-pricing/



### Question 4: **Incorrect**

Which benefits can an organization achieve by deploying AWS Global Accelerator? (Select TWO.)

- Reduces the cost of deploying global services on AWS.
- It caches content around the world to reduce latency.
- Decreased latency to reach applications deployed on AWS. :white_check_mark:
- Improves the availability of applications on AWS. :white_check_mark:
- It increases the durability of data stored on Amazon S3. :x:

#### Explanation

AWS Global Accelerator is a service that improves the availability and performance of applications with local or global users.

It provides static IP addresses that act as a fixed entry point to application endpoints in a single or multiple AWS Regions, such as Application Load Balancers, Network Load Balancers or EC2 instances.

Uses the AWS global network to optimize the path from users to applications, improving the performance of TCP and UDP traffic.

**CORRECT:** "Improves the availability of applications on AWS" is a correct answer.

**CORRECT:** "Decreased latency to reach applications deployed on AWS" is also a correct answer.

**INCORRECT:** "Reduces the cost of deploying global services on AWS" is incorrect. Global Accelerator is not used for cost reduction.

**INCORRECT:** "It increases the durability of data stored on Amazon S3" is incorrect. Global Accelerator is not related to Amazon S3.

**INCORRECT:** "It caches content around the world to reduce latency" is incorrect. Do not confuse AWS Global Accelerator with Amazon CloudFront which does cache content.

**References:**

https://aws.amazon.com/global-accelerator/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/aws-networking/



### Question 5: **Incorrect**

How does AWS assist organisations’ with their capacity requirements?

- With AWS you only pay for what you use :x:
- With AWS you don’t pay for data centres
- You don’t own the infrastructure
- You don’t need to guess your capacity needs :white_check_mark:

#### Explanation

All of these statements are true; however, the question is specifically asking how AWS can assist with capacity requirements.

i.e. how does AWS enable organizations to ensure they don’t over or under-provision their resources.

The ability to scale on demand is the key advantage that can help them here as they can deploy what they know they need today and scale it as they need to tomorrow.

**References:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/cloud-computing-concepts/

https://d1.awsstatic.com/whitepapers/aws-overview.pdf

Question 8: **Incorrect**

Which feature can you use to grant read/write access to an Amazon S3 bucket?

- IAM Group
- IAM User
- IAM Policy :white_check_mark:
- IAM Role :scream:

#### Explanation

Identity and access management (IAM) Policies are documents that define permissions and can be applied to users, groups and roles. IAM policies can be written to grant access to Amazon S3 buckets.

**CORRECT:** "IAM Policy" is the correct answer.

**INCORRECT:** "IAM Role" is incorrect. IAM Roles are created and then “assumed” by trusted entities and define a set of permissions for making AWS service requests.

**INCORRECT:** "IAM Group" is incorrect. IAM Groups are collections of users and have policies attached to them.

**INCORRECT:** "IAM User" is incorrect. An IAM user is an entity that represents a person or service.

**References:**

https://aws.amazon.com/blogs/security/writing-iam-policies-how-to-grant-access-to-an-amazon-s3-bucket/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/identity-and-access-management/



### Question 10: **Incorrect**

Which types of pricing policies does AWS offer? (Select TWO.)

- Global usage discounts
- Pay-as-you-go :white_check_mark:
- Enterprise license agreement (ELA) :x:
- Non-peak hour discounts
- Save when you reserve :white_check_mark:

#### Explanation

Amazon pricing includes options for pay-as-you-go, save when you reserve and pay less by using more.

**CORRECT:** "Pay-as-you-go" is a correct answer.

**CORRECT:** "Save when you reserve" is also a correct answer.

**INCORRECT:** "Enterprise license agreement (ELA)" is incorrect. Amazon does not offer ELAs.

**INCORRECT:** "Non-peak hour discounts" is incorrect. Amazon does not offer non-peak hour discounts.

**INCORRECT:** "Global usage discounts" is incorrect. There are no global usage discounts.

**References:**

https://aws.amazon.com/pricing/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/aws-billing-and-pricing/



### Question 12: **Incorrect**

A company plans to deploy a global commercial application on Amazon EC2 instances. The deployment solution should be designed with the highest redundancy and fault tolerance.

Based on this situation, how should the EC2 instances be deployed?

- Across multiple Availability Zones in two AWS Regions :white_check_mark:
- Across multiple Availability Zones in one AWS Region :x:
- In a single Availability Zone in one AWS Region
- In a single Availability Zone in two AWS Regions

#### Explanation

For maximum redundancy and fault tolerance the application should be deployed in multiple AWS Regions and multiple Availability Zones within each of those regions. This architecture may use Elastic Load Balancers and Amazon Route 53 records to direct traffic to instances. Alternatively, it could use AWS Global Accelerator.

**CORRECT:** "Across multiple Availability Zones in two AWS Regions" is the correct answer.

**INCORRECT:** "In a single Availability Zone in one AWS Region" is incorrect as this does not represent the highest redundancy and fault tolerance.

**INCORRECT:** "In a single Availability Zone in two AWS Regions" is incorrect as this does not represent the highest redundancy and fault tolerance.

**INCORRECT:** "Across multiple Availability Zones in one AWS Region" is incorrect as this does not represent the highest redundancy and fault tolerance.

**References:**

https://aws.amazon.com/architecture/well-architected/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/architecting-for-the-cloud/



### Question 14: **Incorrect**

When a customer deploys a database on Amazon RDS, what is the customer responsible for?

- Configuring Auto Scaling for high availability of instances :x:
- Patching the underlying operating system
- Managing automatic backups of the database
- Controlling network access through security groups :white_check_mark:

#### Explanation

The Amazon Relational Database Service (RDS) is a managed service where AWS manage administration tasks including hardware provisioning, database setup, patching and backups. The customer is responsible for configuring security groups to control access to the database.

**CORRECT:** "Controlling network access through security groups" is the correct answer.

**INCORRECT:** "Patching the underlying operating system" is incorrect as this is taken care of by AWS.

**INCORRECT:** "Managing automatic backups of the database" is incorrect as this is taken care of by AWS.

**INCORRECT:** "Configuring Auto Scaling for high availability of instances" is incorrect as you cannot use Auto Scaling with RDS for availability of the database instances.

**References:**

https://aws.amazon.com/rds/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/aws-databases/

Question 22: **Incorrect**

What benefits are provided by Amazon CloudFront? (Select TWO.)

- 

  Built-in Distributed Denial of Service (DDoS) attack protection  

  (Correct)

- 

  Allows you to register domain names  

- 

  Content is cached at Edge Locations for fast distribution to customers  

  (Correct)

- 

  Used to enable private subnet instances to access the Internet  

- 

  Provides a worldwide distributed DNS service  

  (Incorrect)

#### Explanation

CloudFront is a content delivery network (CDN) that allows you to store (cache) your content at “edge locations” located around the world. This allows customers to access content more quickly and provides security against DDoS attacks. CloudFront can be used for data, videos, applications, and APIs.

Benefits include:

– Cache content at Edge Location for fast distribution to customers.

– Built-in Distributed Denial of Service (DDoS) attack protection.

– Integrates with many AWS services (S3, EC2, ELB, Route 53, Lambda).

**CORRECT:** "Built-in Distributed Denial of Service (DDoS) attack protection" is a correct answer.

**CORRECT:** "Content is cached at Edge Locations for fast distribution to customers" is a correct answer.

**INCORRECT:** "Allows you to register domain names" is incorrect. Amazon Route 53 can be used for registering domain names.

**INCORRECT:** "Used to enable private subnet instances to access the Internet" is incorrect $

**INCORRECT:** "Provides a worldwide distributed DNS service" is incorrect. Amazon Route 53 provides a worldwide distributed DNS service.

**References:**

https://aws.amazon.com/cloudfront/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/content-delivery-and-dns-services/

Question 23: **Incorrect**

Which items can be configured from within the VPC management console? (Select TWO.)

- 

  Auto Scaling

  (Incorrect)

- 

  Regions

- 

  Security Groups

  (Correct)

- 

  Subnets

  (Correct)

- 

  Load Balancing

  (Incorrect)

#### Explanation

Subnets and Security groups can be configured from within the VPC console.

**CORRECT:** "Subnets" is the correct answer.

**CORRECT:** "Security Groups" is the correct answer.

**INCORRECT:** "Regions" is incorrect. Regions are not configured, resources within regions are configured.

**INCORRECT:** "Load Balancing" is incorrect. Load balancing is configured from the EC2 console.

**INCORRECT:** "Auto Scaling" is incorrect. Auto scaling is configured from the EC2 console.

**References:**

https://aws.amazon.com/vpc/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/aws-networking/

Question 31: **Incorrect**

Which feature of Amazon Rekognition can assist with saving time?

- 

  Identification of objects in images and videos  

  (Correct)

- 

  Adds automatic speech recognitions (ASR) to applications

  (Incorrect)

- 

  Identification of the language of text in a document

- 

  Provides on-demand access to compliance-related information

#### Explanation

Amazon Rekognition makes it easy to add image and video analysis to your applications. You just provide an image or video to the Rekognition API, and the service can identify the objects, people, text, scenes, and activities, as well as detect any inappropriate content.

**CORRECT:** "Identification of objects in images and videos" is the correct answer.

**INCORRECT:** "Identification of the language of text in a document" is incorrect. Amazon Comprehend identifies the language of the text; extracts key phrases, places, people, brands, or events; understands how positive or negative the text is; analyzes text using tokenization and parts of speech; and automatically organizes a collection of text files by topic.

**INCORRECT:** "Adds automatic speech recognitions (ASR) to applications" is incorrect. Amazon Transcribe is an automatic speech recognition (ASR) service that makes it easy for developers to add speech-to-text capability to their applications

**INCORRECT:** "Provides on-demand access to compliance-related information" is incorrect. AWS Artifact is a resource for compliance-related information. It provides on-demand access to AWS’ security and compliance reports and select online agreements

**References:**

https://aws.amazon.com/rekognition/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/additional-aws-services-tools/

Question 46: **Incorrect**

Which Amazon S3 storage classes should be used for storing data for long time periods when immediate access is not required at the LOWEST cost? (Select TWO.)

- 

  Amazon S3 Standard

- 

  Amazon S3 Standard-Infrequent Access (S3 Standard-IA)

- 

  Amazon S3 Glacier

  (Correct)

- 

  Amazon S3 Glacier Deep Archive

  (Correct)

- 

  Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)

  (Incorrect)

#### Explanation

Amazon S3 Glacier and Amazon S3 Glacier Deep Archive are suitable for archiving data for long time periods and both classes offer extremely low costs. With both of these storage classes you cannot access data immediately.

![img](https://img-a.udemycdn.com/redactor/raw/test_question_description/2020-11-24_08-39-52-3f53f882647c95e48b1bd672ed35826b.jpg?Lldybp8FNUMP8I4c06JEmByUTmcu_nVLw1HowiXdPiYK8o-TSDBn4kUJnGxiHuAlNCL0EYRqdmj8fupEQUO4M2zMjESgRX1PlcEyAvVTQqqIPcAPwbzjh-ZMa8NzPxzM6kCjItMfRESSqcGbtoqHb_8PjSk7qonHQgHbXj5IH7fL1V6RPB6Ui8h4Etp16MI8GPJz_WZvzSx2mDm77is)

**CORRECT:** "Amazon S3 Glacier" is a correct answer.

**CORRECT:** "Amazon S3 Glacier Deep Archive" is also a correct answer.

**INCORRECT:** "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)" is incorrect. This storage class is suited to data that requires immediate access infrequently.

**INCORRECT:** "Amazon S3 Standard" is incorrect as this is a more expensive storage class suitable for general needs.

**INCORRECT:** "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)" is incorrect. This storage class is suited to data that requires lower resiliency.

**References:**

https://aws.amazon.com/s3/storage-classes/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/aws-storage/

Question 48: **Incorrect**

Which service can be used for building and integrating loosely-coupled, distributed applications?  

- 

  Amazon EFS

  (Incorrect)

- 

  Amazon SNS

  (Correct)

- 

  Amazon RDS

- 

  Amazon EBS

#### Explanation

Amazon Simple Notification Service (Amazon SNS) is a web service that makes it easy to set up, operate, and send notifications from the cloud. Amazon SNS is used for building and integrating loosely-coupled, distributed applications.

**NOTE:** Sometimes AWS will expand abbreviations in answers and other times, like with this question, you just get the abbreviation. Therefore, there’s no workaround, you have to know your abbreviations!

**CORRECT:** "Amazon SNS" is the correct answer.

**INCORRECT:** "Amazon EBS" is incorrect. Amazon Elastic Block Storage (EBS) provides storage volumes for EC2 instances.

**INCORRECT:** "Amazon EFS" is incorrect. Amazon Elastic File System (EFS) provides an NFS filesystem for usage by EC2 instances.

**INCORRECT:** "Amazon RDS" is incorrect. Amazon Relational Database Service (RDS) provides a managed relational database service.

**References:**

https://aws.amazon.com/sns/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/notification-services/

Question 53: **Incorrect**

What benefits does Amazon EC2 provide over using non-cloud servers? (Select TWO.)

- 

  High-availability with an SLA of 99.999%

- 

  Elastic web-scale computing

  (Correct)

- 

  Fault tolerance

  (Incorrect)

- 

  Complete control of the hypervisor layer

- 

  Inexpensive

  (Correct)

#### Explanation

**Elastic Web-Scale computing**– you can increase or decrease capacity within minutes not hours and commission one to thousands of instances simultaneously.

**Inexpensive** – Amazon passes on the financial benefits of scale by charging very low rates and on a capacity consumed basis.

**CORRECT:** "Elastic web-scale computing" is a correct answer.

**CORRECT:** "Inexpensive" is also a correct answer.

**INCORRECT:** "Fault tolerance" is incorrect. Amazon does not offer fault tolerance for EC2, you need to design this into your application stack (and assume things will fail)

**INCORRECT:** "High-availability with an SLA of 99.999%" is incorrect. AWS provide an SLA for EC2 that states that services will be available within each AWS region with a Monthly Uptime Percentage of at least 99.99%

**INCORRECT:** "Complete control of the hypervisor layer" is incorrect. Amazon EC2 does not provide any control of the hypervisor or underlying hardware infrastructure.

**References:**

https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/cloud-computing-concepts/

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/architecting-for-the-cloud/

Question 58: **Incorrect**

Which feature of AWS allows you to deploy a new application for which the requirements may change over time?  

- 

  Elasticity  

  (Correct)

- 

  High availability  

- 

  Fault tolerance  

- 

  Disposable resources  

  (Incorrect)

#### Explanation

Elasticity allows you to deploy your application without worrying about whether it will need more or less resources in the future. With elasticity, the infrastructure can scale on-demand and you only pay for what you use.

**CORRECT:** "Elasticity" is the correct answer.

**INCORRECT:** "Fault tolerance" is incorrect. Fault tolerance is a mechanism used for ensuring the availability or recoverability of your application in the of a hardware or software fault.

**INCORRECT:** "Disposable resources" is incorrect. Disposable resources is an architectural principle in which servers and other components are treated as temporary resources and are replaced rather than updated

**INCORRECT:** "High availability" is incorrect. High availability is a mechanism used for ensuring the availability of your application and protecting against the failure of hardware or software components.

**References:**

https://aws.amazon.com/training/course-descriptions/architect/

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/architecting-for-the-cloud/

Question 63: **Incorrect**

Which of the following is a method of backup available in the AWS cloud?

- 

  Amazon EFS File Systems

  (Incorrect)

- 

  Availability Zones

- 

  Amazon EBS Snapshots

  (Correct)

- 

  Amazon Route 53 Alias Record

#### Explanation

Amazon Elastic Block Store (EBS) is a block-based storage system that provides a “virtual hard disk in the cloud”. You can back up your EBS volumes using snapshots which are point-in-time copies of the data.

**CORRECT:** "Amazon EBS Snapshots" is the correct answer.

**INCORRECT:** "Availability Zones" is incorrect. Availability Zones are part of the AWS Global Infrastructure. AZs can be used for high availability and fault tolerance as you can architect your applications to be spread across them. However, they are not a backup solution.

**INCORRECT:** "Amazon EFS File Systems" is incorrect. The Amazon Elastic File System (EFS) provides file-based storage that you access using the NFS v2 protocol. This is storage service but not a backup service. You can backup EFS using the AWS Backup service or using EFS-to-EFS backup.

**INCORRECT:** "Amazon Route 53 Alias Record" is incorrect. Amazon Route 53 provides a DNS service and an Alias record is a type of record that can map a public domain name to an AWS service target.

**References:**

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html

**Save time with our exam-specific cheat sheets:**

https://digitalcloud.training/certification-training/aws-certified-cloud-practitioner/aws-storage/