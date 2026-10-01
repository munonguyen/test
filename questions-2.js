window.ALL_QUESTIONS.push(...[
{
  id:11, cat:"Security Groups & NACL", level:"Exam", multi:false,
  q:"A security team has identified a malicious public IPv4 address that is scanning every EC2 instance in a subnet. The team wants to block that single source at the subnet boundary without modifying each instance security group. Which control is most appropriate?",
  opts:[
    "Add an explicit DENY rule to the subnet's network ACL.",
    "Add an explicit DENY rule to the instances' security groups.",
    "Create an IAM policy that denies ec2:Connect from the IP address.",
    "Remove the local route from the subnet route table."
  ], ans:[0],
  exp:"A is correct. NACLs operate at the subnet boundary and support explicit DENY rules. Security groups support allow rules only. IAM policies do not filter IP packets, and removing the local route would break normal VPC communication rather than block one source."
},
{
  id:12, cat:"Security Groups & NACL", level:"Hard", multi:false,
  q:"A custom NACL has these inbound rules: 100 ALLOW TCP 443 from 0.0.0.0/0, 110 DENY ALL from 198.51.100.10/32, and * DENY ALL. A client at 198.51.100.10 connects to TCP 443. What happens?",
  opts:[
    "The connection is denied because rule 110 is more specific.",
    "The connection is allowed because rule 100 is evaluated first and matches.",
    "Both rules are combined and the explicit DENY always wins.",
    "The result depends only on the security group."
  ], ans:[1],
  exp:"B is correct. NACL rules are evaluated in ascending rule-number order and processing stops at the first match. Rule 100 matches TCP 443 from any source before rule 110 is considered."
},
{
  id:13, cat:"Security Groups & NACL", level:"Exam", multi:false,
  q:"A database security group allows inbound TCP 5432 from the application server security group. An application instance opens a connection and receives responses from the database. Why is a separate inbound rule on the application security group for the database response traffic not required?",
  opts:[
    "Security groups are stateful.",
    "Network ACLs automatically mirror security group rules.",
    "Route tables dynamically create a return route for every flow.",
    "RDS bypasses security groups for response traffic."
  ], ans:[0],
  exp:"A is correct. Security groups are stateful, so response traffic for an allowed connection is automatically permitted in the reverse direction. NACLs remain stateless and route tables do not create per-flow rules."
},
{
  id:14, cat:"VPC Flow Logs", level:"Exam", multi:false,
  q:"Users report intermittent connection failures to an application. A network engineer needs to determine which source and destination IP addresses and ports are involved and whether traffic is being accepted or rejected at the VPC networking layer. The engineer does not need to inspect packet payloads. Which feature should be enabled?",
  opts:[
    "AWS CloudTrail data events",
    "VPC Flow Logs",
    "Amazon Inspector network reachability findings only",
    "ALB access logs only"
  ], ans:[1],
  exp:"B is correct. VPC Flow Logs capture network-flow metadata such as addresses, ports, protocol, and ACCEPT/REJECT status. They are not full packet captures. CloudTrail records API activity, and ALB access logs cover only load-balancer requests."
},
{
  id:15, cat:"VPC Flow Logs", level:"Hard", multi:false,
  q:"A security team must retain network-flow records for one year and run ad hoc SQL queries to find rejected connections by source address, destination port, and date. The team wants a low-cost storage option and does not require sub-minute interactive dashboards. Which architecture is MOST appropriate?",
  opts:[
    "Publish VPC Flow Logs to Amazon S3 and query the data with Amazon Athena.",
    "Publish VPC Flow Logs only to CloudWatch Metrics and query them with Athena.",
    "Send AWS CloudTrail events to S3 and use VPC Reachability Analyzer.",
    "Enable packet mirroring on every ENI and store full packets in DynamoDB."
  ], ans:[0],
  exp:"A is correct. Flow Logs can be published to S3, and Athena provides serverless SQL queries over the retained files. The alternatives either store the wrong data or add unnecessary complexity and cost."
},
{
  id:16, cat:"VPC Flow Logs", level:"Hard", multi:false,
  q:"A company wants near-real-time search and dashboards for VPC Flow Logs in Amazon OpenSearch Service. The logs should first be centralized in CloudWatch Logs, and the company wants a managed delivery mechanism rather than writing custom consumers. Which design best fits?",
  opts:[
    "VPC Flow Logs -> CloudWatch Logs -> Amazon Data Firehose -> OpenSearch Service",
    "VPC Flow Logs -> CloudTrail -> Kinesis Data Streams -> OpenSearch Service",
    "VPC Flow Logs -> Route 53 Resolver -> OpenSearch Service",
    "VPC Flow Logs -> S3 Glacier Deep Archive -> OpenSearch Service"
  ], ans:[0],
  exp:"A is correct. A managed path from Flow Logs into CloudWatch Logs and then through Data Firehose to OpenSearch fits the near-real-time search requirement. CloudTrail is not a Flow Logs destination, and Glacier Deep Archive is not suitable for near-real-time analysis."
},
{
  id:17, cat:"Security Groups & NACL", level:"Hard", multi:false,
  q:"A network engineer sees REJECT entries in VPC Flow Logs for traffic to an EC2 instance. The subnet uses a restrictive custom NACL, and the instance also has restrictive security groups. What is the safest conclusion?",
  opts:[
    "The Flow Log proves the security group specifically caused the rejection.",
    "The Flow Log proves the NACL specifically caused the rejection.",
    "The Flow Log shows the traffic was rejected, but additional checks are needed to identify the exact control.",
    "The Flow Log means the application process returned an HTTP 403 response."
  ], ans:[2],
  exp:"C is correct. Flow Logs provide ACCEPT/REJECT visibility but do not by themselves identify the exact rule that caused a rejection. Security groups, NACLs, routes, and related configuration still need to be inspected."
},
{
  id:18, cat:"Security Groups & NACL", level:"Exam", multi:false,
  q:"A company creates a new custom network ACL and associates it with a production subnet. Immediately, all traffic stops. The team did not add any explicit allow rules. Which behavior explains the outage?",
  opts:[
    "A new custom NACL denies traffic that is not explicitly allowed.",
    "Security groups become stateless when a custom NACL is attached.",
    "Custom NACLs automatically remove the VPC local route.",
    "Custom NACLs allow all traffic by default."
  ], ans:[0],
  exp:"A is correct. A custom NACL denies traffic unless rules allow it, and unmatched traffic reaches the final deny rule. Security groups remain stateful and route tables are unaffected."
},
{
  id:19, cat:"VPC Endpoints & PrivateLink", level:"Exam", multi:false,
  q:"EC2 instances in private subnets upload backup files to Amazon S3. Company policy says the S3 traffic must not require a NAT gateway, internet gateway, or public IP address. The company also wants the LOWEST endpoint cost. Which solution should be used?",
  opts:[
    "Create an S3 gateway VPC endpoint and associate it with the private subnet route tables.",
    "Create a public NAT gateway and restrict outbound traffic to S3 public IP ranges.",
    "Create an AWS Site-to-Site VPN to the S3 public endpoint.",
    "Create an internet-facing Network Load Balancer in front of S3."
  ], ans:[0],
  exp:"A is correct. An S3 gateway endpoint provides private VPC-to-S3 connectivity through route tables and has no additional endpoint charge. NAT introduces processing cost and the other designs are unnecessary or invalid."
},
{
  id:20, cat:"VPC Endpoints & PrivateLink", level:"Exam", multi:false,
  q:"A Lambda function is configured to run inside a VPC and must read and write to Amazon DynamoDB. The function does not need general internet access. The team wants to minimize recurring networking cost and avoid a NAT gateway. Which solution is best?",
  opts:[
    "Create a DynamoDB gateway VPC endpoint and update the relevant route tables.",
    "Create an internet gateway and assign an Elastic IP address to the Lambda function.",
    "Create a NAT gateway only for DynamoDB traffic.",
    "Create VPC peering between the VPC and DynamoDB."
  ], ans:[0],
  exp:"A is correct. DynamoDB supports gateway VPC endpoints, allowing private access without a NAT gateway. Lambda ENIs are not given Elastic IPs in this way, and DynamoDB is not reached through VPC peering."
}
]);