window.ALL_QUESTIONS.push(...[
{
  id:51, cat:"Troubleshooting & Architecture", level:"Hard", multi:false,
  q:"A private EC2 instance can reach another EC2 instance in the same VPC but cannot reach the internet. The subnet route table has 0.0.0.0/0 -> nat-123. The NAT gateway is in a subnet whose route table contains only the VPC local route. Security groups and NACLs are permissive. What is missing?",
  opts:["The NAT gateway subnet needs a default route to an internet gateway attached to the VPC.","The private EC2 instance needs an Elastic IP address.","The private subnet needs a second route to the same NAT gateway.","The NAT gateway needs a security group that allows HTTPS."], ans:[0],
  exp:"A is correct. A public NAT gateway must be in a subnet that has a default route to an attached internet gateway for public internet access. Private instances do not need public IPs, and NAT gateways do not use security groups."
},
{
  id:52, cat:"Troubleshooting & Architecture", level:"Hard", multi:false,
  q:"A company stores VPC Flow Logs in Amazon S3. Analysts say finding a small set of rejected connections among months of logs is too slow when they manually inspect files. Which AWS service is the most direct serverless option for SQL-style analysis of the log files in S3?",
  opts:["Amazon Athena","Amazon Route 53","AWS CloudTrail","AWS Direct Connect"], ans:[0],
  exp:"A is correct. Athena can query log data directly in Amazon S3 using SQL. Route 53 is DNS, CloudTrail records API activity, and Direct Connect is a hybrid networking service."
},
{
  id:53, cat:"Troubleshooting & Architecture", level:"Hard", multi:false,
  q:"A company runs an internal service on EC2 instances in private subnets. The service must be consumed by a partner VPC, but the company wants to expose only the service and not provide routed access to the rest of its VPC. CIDRs may overlap in the future. Which approach is BEST?",
  opts:["Publish the service using AWS PrivateLink behind a Network Load Balancer.","Create full VPC peering and advertise all subnet routes.","Attach both VPCs to one internet gateway.","Use one NAT gateway as a transitive router between the VPCs."], ans:[0],
  exp:"A is correct. PrivateLink provides private service-level exposure without full routed VPC connectivity and is well suited to multi-consumer or overlapping-CIDR scenarios."
},
{
  id:54, cat:"Troubleshooting & Architecture", level:"Hard", multi:false,
  q:"An organization has many application VPCs. Security requires all outbound internet traffic to pass through a centralized inspection VPC before reaching the internet. The company wants a scalable hub-and-spoke routing model. Which combination is MOST appropriate?",
  opts:["Transit Gateway with a centralized inspection/egress VPC and carefully designed route tables","A full mesh of VPC peering connections with a NAT gateway in every application VPC","One internet gateway shared directly across all VPCs","S3 gateway endpoints in every VPC for all internet destinations"], ans:[0],
  exp:"A is correct. Transit Gateway is commonly used to centralize routing through shared inspection and egress VPCs. Full-mesh peering is operationally heavy and non-transitive, and the other options do not provide centralized inspection."
},
{
  id:55, cat:"Troubleshooting & Architecture", level:"Hard", multi:false,
  q:"A company wants to inspect traffic between many VPCs with third-party virtual security appliances while scaling the appliance fleet elastically. The company also wants to avoid manually changing route tables whenever an appliance instance is replaced. Which AWS service is specifically designed to help insert and scale virtual network appliances transparently?",
  opts:["Gateway Load Balancer","Application Load Balancer","Amazon CloudFront","Gateway VPC Endpoint"], ans:[0],
  exp:"A is correct. Gateway Load Balancer is designed for transparent insertion, scaling, and availability of third-party virtual network appliances."
},
{
  id:56, cat:"Troubleshooting & Architecture", level:"Hard", multi:false,
  q:"A security team needs managed, stateful filtering of VPC traffic using centrally defined firewall rules and wants an AWS-native network firewall service rather than operating third-party EC2 appliances. Which service should be considered?",
  opts:["AWS Network Firewall","AWS WAF only","Amazon GuardDuty only","VPC Flow Logs only"], ans:[0],
  exp:"A is correct. AWS Network Firewall provides managed stateless and stateful traffic inspection for VPC architectures. WAF protects web applications, GuardDuty detects threats, and Flow Logs provide visibility rather than inline enforcement."
},
{
  id:57, cat:"Mixed Exam Scenario", level:"Hard", multi:true,
  q:"A company has EC2 instances in private subnets that need access to Amazon S3 and to an external vendor API. Security requires that S3 traffic remain private. The company wants to minimize NAT data-processing charges but must keep the vendor API reachable. Which TWO changes should a solutions architect make?",
  opts:["Create an S3 gateway VPC endpoint and associate it with the private route tables.","Keep a NAT gateway path for the external vendor API.","Create an internet gateway route directly from the private instances to S3.","Create VPC peering between the VPC and the external vendor's public API.","Replace all IPv4 traffic with an egress-only internet gateway."], ans:[0,1],
  exp:"A and B are correct. S3 traffic can bypass the NAT through a gateway endpoint, reducing NAT processing while keeping S3 access private. The third-party public API still needs an IPv4 internet egress path such as a NAT gateway."
},
{
  id:58, cat:"Mixed Exam Scenario", level:"Hard", multi:true,
  q:"A network architect is choosing between VPC peering and Transit Gateway. Which TWO requirements are strong indicators for using Transit Gateway instead of a set of individual peering connections?",
  opts:["Transitive routing is required among many VPCs.","Centralized connectivity to on-premises networks must be shared by many VPCs.","Only two VPCs need a simple one-to-one private connection.","The application only needs private access to Amazon S3.","Each VPC must use an Elastic IP address."], ans:[0,1],
  exp:"A and B are correct. Transit Gateway is designed for transitive, hub-and-spoke, many-VPC, and shared hybrid connectivity. A simple two-VPC connection often favors peering, while S3 private access is an endpoint problem."
},
{
  id:59, cat:"Mixed Exam Scenario", level:"Hard", multi:true,
  q:"A solutions architect is reviewing network controls for a public web subnet. Which TWO statements are correct?",
  opts:["Security groups are stateful and support allow rules.","Network ACLs are stateless and can contain both allow and deny rules.","Security groups are evaluated by ascending rule number and first match wins.","Network ACL return traffic is always allowed automatically.","A security group can be attached directly to a subnet."], ans:[0,1],
  exp:"A and B are correct. Security groups are stateful allow-list controls attached to ENIs and supported resources. NACLs are stateless subnet controls with ordered allow and deny rules."
},
{
  id:60, cat:"Mixed Exam Scenario", level:"Hard", multi:true,
  q:"A company must investigate suspicious network activity and also determine which IAM principal changed a security group rule at the same time. Which TWO data sources should the security team use?",
  opts:["VPC Flow Logs for network-flow metadata","AWS CloudTrail for the security group API change","Only Amazon CloudWatch CPU metrics","Only the subnet route table","Only the S3 access log for an unrelated bucket"], ans:[0,1],
  exp:"A and B are correct. Flow Logs show network-flow metadata such as source, destination, and ACCEPT/REJECT. CloudTrail records AWS API activity such as who modified a security group."
}
]);