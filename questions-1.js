window.ALL_QUESTIONS.push(...[
{
  id:1, cat:"Routing, IGW & NAT", level:"Exam", multi:false,
  q:"A company runs a three-tier application in a VPC across three Availability Zones. The web tier is in public subnets, while the application tier is in private subnets. The application instances must download operating system patches from public repositories. The company wants the design to remain highly available if one Availability Zone fails and wants to avoid unnecessary cross-AZ data processing charges. Which solution best meets these requirements?",
  opts:[
    "Create one NAT gateway in a single public subnet and route all private subnets to it.",
    "Create a NAT gateway in each public subnet and route each private subnet to the NAT gateway in the same Availability Zone.",
    "Attach a second internet gateway to the VPC and associate it with the private subnets.",
    "Create one egress-only internet gateway and route all IPv4 internet traffic through it."
  ], ans:[1],
  exp:"B is correct. A NAT gateway is zonal, so placing one in each AZ and keeping each private subnet's default route local to its AZ improves resilience and avoids cross-AZ NAT traffic. A creates an AZ dependency and can add cross-AZ charges. C is invalid because a VPC does not use multiple internet gateways this way. D is for IPv6, not IPv4."
},
{
  id:2, cat:"Routing, IGW & NAT", level:"Exam", multi:false,
  q:"An application server is in a private subnet and has only a private IPv4 address. Its route table contains 0.0.0.0/0 -> igw-123456. The security group and network ACL allow outbound HTTPS. The server still cannot reach a public software repository. What is the most appropriate change?",
  opts:[
    "Associate an Elastic IP address with the route table.",
    "Replace the default route with a route to a NAT gateway in a public subnet.",
    "Add a second internet gateway and attach it to the private subnet.",
    "Change the subnet's network ACL to stateful mode."
  ], ans:[1],
  exp:"B is correct. An instance with only a private IPv4 address cannot use an internet gateway directly for public internet access. The standard path is private subnet -> public NAT gateway -> internet gateway. Route tables cannot own Elastic IPs, and NACLs are always stateless."
},
{
  id:3, cat:"Routing, IGW & NAT", level:"Hard", multi:false,
  q:"A workload in a private subnet accesses Amazon S3 heavily and also calls a small number of third-party HTTPS APIs on the public internet. Monthly NAT gateway data-processing charges are unexpectedly high. The architecture team wants to reduce cost without giving the instances public IP addresses and without removing internet access to the third-party APIs. Which design is the MOST cost-effective?",
  opts:[
    "Replace the NAT gateway with an internet gateway and keep the instances private.",
    "Create a gateway VPC endpoint for Amazon S3 and keep the NAT gateway for non-AWS internet destinations.",
    "Create an interface endpoint for every S3 bucket and remove the NAT gateway.",
    "Move the instances to public subnets and restrict inbound traffic with security groups."
  ], ans:[1],
  exp:"B is correct. S3 traffic can use a gateway endpoint, avoiding NAT processing charges, while the NAT gateway remains for third-party IPv4 internet destinations. A does not make private IPv4 instances internet-reachable, C does not solve vendor API access and adds endpoint cost, and D changes the exposure model unnecessarily."
},
{
  id:4, cat:"Routing, IGW & NAT", level:"Exam", multi:false,
  q:"A company has dual-stack EC2 instances in private subnets. The instances must initiate software-update connections to IPv6 destinations on the internet. Security policy requires that hosts on the internet must not be able to initiate IPv6 connections to the instances. Which component should a solutions architect add?",
  opts:[
    "A NAT gateway with an Elastic IP address",
    "An egress-only internet gateway with a ::/0 route",
    "An internet gateway with a 0.0.0.0/0 route only",
    "A gateway VPC endpoint for IPv6"
  ], ans:[1],
  exp:"B is correct. An egress-only internet gateway provides outbound-only internet connectivity for IPv6 and prevents internet hosts from initiating IPv6 connections through it. NAT gateways are the common IPv4 outbound pattern."
},
{
  id:5, cat:"Routing, IGW & NAT", level:"Hard", multi:false,
  q:"A VPC has CIDR 10.0.0.0/16. A route table contains 10.0.0.0/16 -> local, 10.0.0.0/24 -> tgw-abc, and 0.0.0.0/0 -> nat-xyz. An EC2 instance sends traffic to 10.0.0.50. Which target will AWS select?",
  opts:[
    "The local route because VPC local routes always win",
    "The NAT gateway because it is the default route",
    "The transit gateway because 10.0.0.0/24 is the longest-prefix match",
    "The traffic is dropped because the routes overlap"
  ], ans:[2],
  exp:"C is correct. VPC routing uses longest-prefix match. /24 is more specific than /16 and /0, so traffic to 10.0.0.50 selects the transit gateway route."
},
{
  id:6, cat:"Routing, IGW & NAT", level:"Exam", multi:false,
  q:"A company is designing a VPC for a new application. An Application Load Balancer must be reachable from the internet, but the EC2 application instances must not have public IPv4 addresses. The instances still need outbound access to public package repositories. Which arrangement is appropriate?",
  opts:[
    "Place the ALB and EC2 instances in public subnets and assign Elastic IPs to all EC2 instances.",
    "Place the ALB in public subnets, the EC2 instances in private subnets, and route outbound IPv4 traffic from the private subnets through NAT gateways.",
    "Place the ALB in private subnets and attach an internet gateway directly to the ALB.",
    "Place everything in private subnets and use only a gateway endpoint for internet access."
  ], ans:[1],
  exp:"B is correct. The internet-facing ALB belongs in public subnets, while backend instances can stay private and use NAT gateways for outbound IPv4 internet access."
},
{
  id:7, cat:"Routing, IGW & NAT", level:"Hard", multi:false,
  q:"A company has two private subnets in different Availability Zones. Both currently route 0.0.0.0/0 to a NAT gateway in AZ-A. During an AZ-A outage, instances in AZ-B lose internet access even though they remain healthy. What change most directly removes this failure mode?",
  opts:[
    "Create a NAT gateway in AZ-B and update the AZ-B private route table to use it.",
    "Create a second route from AZ-B to the same NAT gateway with a lower metric.",
    "Attach a second internet gateway to the VPC.",
    "Move the AZ-B private subnet into AZ-A."
  ], ans:[0],
  exp:"A is correct. NAT gateways are zonal. Using one NAT gateway per AZ and routing each private subnet to the local NAT gateway removes the dependency on another AZ."
},
{
  id:8, cat:"Routing, IGW & NAT", level:"Exam", multi:false,
  q:"A company wants a subnet to be public for IPv4 internet access. The subnet's route table already contains the VPC local route. Which additional configuration is essential at the subnet routing layer?",
  opts:[
    "A route 0.0.0.0/0 to an internet gateway attached to the VPC",
    "A route 0.0.0.0/0 to a gateway VPC endpoint",
    "A route to a security group that allows internet access",
    "A route to an Elastic IP address"
  ], ans:[0],
  exp:"A is correct. A public subnet has a route to an internet gateway. Individual resources still need appropriate public addressing and security rules to communicate directly with the internet."
},
{
  id:9, cat:"Security Groups & NACL", level:"Exam", multi:false,
  q:"A company runs web servers behind an Application Load Balancer. The security team wants the EC2 instances to accept HTTPS traffic only when the traffic comes from the ALB, even if the instances are replaced and receive new private IP addresses. Which configuration requires the LEAST ongoing maintenance?",
  opts:[
    "Allow inbound TCP 443 on the EC2 security group from 0.0.0.0/0.",
    "Allow inbound TCP 443 on the EC2 security group from the ALB security group.",
    "Create a NACL rule that allows the current private IP addresses of the ALB nodes.",
    "Assign Elastic IP addresses to every ALB node and allow those addresses."
  ], ans:[1],
  exp:"B is correct. Security groups can reference other security groups, so the rule continues to work as instances and ALB nodes change. NACLs cannot reference security groups, and maintaining load-balancer node IPs is brittle."
},
{
  id:10, cat:"Security Groups & NACL", level:"Hard", multi:false,
  q:"An EC2 web server uses a security group that allows inbound TCP 443 from the internet. A custom network ACL allows inbound TCP 443 but allows outbound traffic only on TCP 443. Clients can establish connections only intermittently, and responses often fail. What is the MOST likely network ACL issue?",
  opts:[
    "The NACL must allow outbound ephemeral destination ports used by the clients.",
    "The NACL must be converted to a stateful ACL.",
    "The NACL must allow inbound UDP 53 for every HTTPS response.",
    "The security group must add a DENY rule for ephemeral ports."
  ], ans:[0],
  exp:"A is correct. NACLs are stateless, so return traffic must be explicitly allowed. For inbound HTTPS, server responses commonly target client ephemeral ports. NACLs cannot be made stateful, and security groups do not support explicit DENY rules."
}
]);