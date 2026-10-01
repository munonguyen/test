window.ALL_QUESTIONS.push(...[
{
  id:31, cat:"VPC Peering & Transit Gateway", level:"Hard", multi:false,
  q:"A company operates 60 VPCs across eight AWS accounts in one Region. Every VPC must reach shared DNS, security inspection, and on-premises networks. The network team wants centralized route control and wants to avoid hundreds of point-to-point peering connections. Which architecture has the LEAST operational overhead?",
  opts:[
    "Create a full mesh of VPC peering connections.",
    "Attach the VPCs and hybrid connections to AWS Transit Gateway and manage connectivity with transit gateway route tables.",
    "Create a NAT gateway in every VPC and route inter-VPC traffic through the public internet.",
    "Create a Site-to-Site VPN between every pair of VPCs."
  ], ans:[1],
  exp:"B is correct. Transit Gateway provides scalable hub-and-spoke connectivity and centralized routing for many VPCs and hybrid attachments. Full-mesh peering and per-pair VPNs scale poorly, and NAT gateways are not an inter-VPC routing fabric."
},
{
  id:32, cat:"VPC Peering & Transit Gateway", level:"Hard", multi:false,
  q:"A company uses one Transit Gateway for production and development VPCs. Production VPCs may reach a shared-services VPC, and development VPCs may also reach shared services, but production and development must not communicate directly. Which feature should be used to enforce this network segmentation?",
  opts:[
    "Separate Transit Gateway route tables with controlled associations and route propagation.",
    "One default transit gateway route table with all route propagation enabled.",
    "Different security groups attached directly to the Transit Gateway.",
    "Separate internet gateways for the production and development VPCs."
  ], ans:[0],
  exp:"A is correct. Transit Gateway route tables, associations, propagation, and optional blackhole routes are designed for segmentation. A single fully propagated route table would allow broader connectivity."
},
{
  id:33, cat:"VPC Peering & Transit Gateway", level:"Exam", multi:false,
  q:"A central networking account owns an AWS Transit Gateway. Application teams use separate AWS accounts in the same organization. The central team wants those accounts to attach their VPCs to the Transit Gateway without transferring ownership. Which service should be used to share the Transit Gateway?",
  opts:[
    "AWS Resource Access Manager (AWS RAM)",
    "AWS CloudFormation StackSets only",
    "AWS Service Catalog AppRegistry",
    "Amazon Route 53 Resolver"
  ], ans:[0],
  exp:"A is correct. AWS RAM is the resource-sharing mechanism used to share supported resources such as Transit Gateway across AWS accounts."
},
{
  id:34, cat:"VPC Peering & Transit Gateway", level:"Hard", multi:false,
  q:"Two VPCs in the same Region need private connectivity. They have non-overlapping CIDRs, there are no on-premises networks, and no additional VPCs are expected. The company wants the lowest recurring network infrastructure cost and the simplest design. Which option is MOST appropriate?",
  opts:[
    "VPC peering",
    "AWS Transit Gateway",
    "AWS Direct Connect",
    "Two Site-to-Site VPN connections through a virtual private gateway"
  ], ans:[0],
  exp:"A is correct. For a simple one-to-one VPC connection, peering is typically the least complex and avoids Transit Gateway attachment and data-processing charges."
},
{
  id:35, cat:"VPC Peering & Transit Gateway", level:"Hard", multi:false,
  q:"VPC-A and VPC-B have an active peering connection and non-overlapping CIDR blocks. The security groups and NACLs allow the required traffic, but instances still cannot communicate. No route entries were changed after accepting the peering connection. What should be done?",
  opts:[
    "Add routes in the relevant route tables on both sides that point the peer CIDR to the peering connection.",
    "Create a NAT gateway in each VPC.",
    "Attach both VPCs to the same internet gateway.",
    "Enable transitive routing on the peering connection."
  ], ans:[0],
  exp:"A is correct. VPC peering does not automatically add the required routes. Each side's relevant route tables must route the peer CIDR to the peering connection."
},
{
  id:36, cat:"VPC Peering & Transit Gateway", level:"Exam", multi:false,
  q:"A team attempts to create VPC peering between VPC-A (10.10.0.0/16) and VPC-B (10.10.128.0/17). AWS rejects the design. What is the fundamental issue?",
  opts:[
    "The CIDR blocks overlap.",
    "The VPCs are too large for peering.",
    "Peering requires both VPCs to use /24 CIDRs.",
    "Peering is supported only when the VPCs are in different Regions."
  ], ans:[0],
  exp:"A is correct. 10.10.128.0/17 is contained inside 10.10.0.0/16, so the address spaces overlap. VPC peering requires non-overlapping IP ranges."
},
{
  id:37, cat:"VPC Peering & Transit Gateway", level:"Hard", multi:false,
  q:"A network team uses Transit Gateway to connect application VPCs to a centralized inspection VPC containing stateful firewall appliances. The team must ensure traffic is routed symmetrically through the inspection VPC to preserve appliance flow state. Which design concern is MOST important?",
  opts:[
    "Use an architecture that supports appliance mode and symmetric routing for the inspection path.",
    "Replace the Transit Gateway with a gateway VPC endpoint.",
    "Assign Elastic IP addresses to every application instance.",
    "Disable all route propagation and use only internet gateways."
  ], ans:[0],
  exp:"A is correct. Stateful inspection appliances require symmetric routing so both directions of a flow traverse the intended inspection path. Transit Gateway appliance-oriented designs address this concern."
},
{
  id:38, cat:"VPC Peering & Transit Gateway", level:"Hard", multi:false,
  q:"A company has VPCs in two AWS Regions and wants a centralized transit architecture. It already uses Transit Gateway in each Region and needs private inter-Region connectivity between the transit domains. Which design is appropriate?",
  opts:[
    "Create a Transit Gateway peering attachment between the regional Transit Gateways and configure routes.",
    "Create a VPC peering connection directly between the two Transit Gateways.",
    "Attach one internet gateway to both Regions.",
    "Use an S3 gateway endpoint as the inter-Region router."
  ], ans:[0],
  exp:"A is correct. Transit Gateways can be peered across Regions. VPC peering connects VPCs, not Transit Gateways."
},
{
  id:39, cat:"VPC Peering & Transit Gateway", level:"Hard", multi:false,
  q:"A Transit Gateway route table has a propagated route 10.20.0.0/16 to VPC-B. The network team wants traffic to a compromised 10.20.50.0/24 segment to be dropped while leaving the rest of VPC-B reachable. Which change is most direct?",
  opts:[
    "Add a more-specific 10.20.50.0/24 blackhole route to the Transit Gateway route table.",
    "Delete the entire VPC-B attachment.",
    "Add an internet gateway route for 10.20.50.0/24.",
    "Attach a security group to the Transit Gateway route table."
  ], ans:[0],
  exp:"A is correct. Transit Gateway route tables support static blackhole routes, and the more-specific /24 route can drop only the compromised segment while the broader /16 remains reachable."
},
{
  id:40, cat:"VPN & Direct Connect", level:"Exam", multi:false,
  q:"A company needs encrypted connectivity from an on-premises data center to a VPC. The connection must be available within days, and occasional internet latency variation is acceptable. Which solution is the BEST fit?",
  opts:[
    "AWS Site-to-Site VPN",
    "A new dedicated AWS Direct Connect connection only",
    "VPC peering",
    "A gateway VPC endpoint"
  ], ans:[0],
  exp:"A is correct. Site-to-Site VPN provides IPsec encryption over the public internet and can usually be established much faster than a new physical Direct Connect circuit."
}
]);