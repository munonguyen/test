window.ALL_QUESTIONS.push(...[
{
  id:21, cat:"VPC Endpoints & PrivateLink", level:"Hard", multi:false,
  q:"A company's on-premises data center is connected to a VPC through AWS Direct Connect. Servers on premises must access Amazon S3 through private IP addresses. The security team does not want the traffic to use S3 public endpoints. Which option is appropriate?",
  opts:[
    "Use only an S3 gateway endpoint because gateway endpoints are reachable from on-premises through Direct Connect.",
    "Create an S3 interface VPC endpoint and provide DNS and routing so on-premises clients resolve and reach the endpoint private IPs.",
    "Create a NAT gateway in the VPC and route on-premises S3 traffic through it.",
    "Create VPC peering between the on-premises network and Amazon S3."
  ], ans:[1],
  exp:"B is correct. S3 interface endpoints provide PrivateLink ENIs with private IP addresses that can be reached from connected networks when DNS and routing are configured. Gateway endpoints are not reachable from on-premises networks."
},
{
  id:22, cat:"VPC Endpoints & PrivateLink", level:"Exam", multi:false,
  q:"Private EC2 instances must call Amazon SQS without traversing an internet gateway or NAT gateway. The company wants to keep the traffic on private IP addresses. Which solution should be implemented?",
  opts:[
    "Create an SQS gateway endpoint.",
    "Create an SQS interface VPC endpoint and enable appropriate private DNS settings.",
    "Create a VPC peering connection to the SQS service VPC.",
    "Add the SQS public IP ranges to the VPC local route."
  ], ans:[1],
  exp:"B is correct. SQS uses interface endpoints powered by AWS PrivateLink. Gateway endpoints are for S3 and DynamoDB. AWS managed services are not reached by peering to a hidden service VPC."
},
{
  id:23, cat:"VPC Endpoints & PrivateLink", level:"Hard", multi:false,
  q:"A security policy requires that EC2 instances may access only a specific set of company-owned S3 buckets through an S3 gateway endpoint. The policy must prevent the endpoint from being used to reach unrelated S3 resources. Which control is the most direct way to restrict what can be accessed through the endpoint?",
  opts:[
    "Attach an endpoint policy to the S3 gateway endpoint that allows only the approved buckets.",
    "Attach a security group to the S3 gateway endpoint and list the approved bucket names.",
    "Change the NACL to include the approved S3 bucket ARNs.",
    "Create one NAT gateway for each approved bucket."
  ], ans:[0],
  exp:"A is correct. Gateway endpoints support endpoint policies that can restrict which S3 resources are reachable through the endpoint. Gateway endpoints do not use security groups, and NACLs cannot evaluate S3 bucket ARNs."
},
{
  id:24, cat:"VPC Endpoints & PrivateLink", level:"Hard", multi:false,
  q:"A company wants an S3 bucket to reject requests unless they arrive through a particular VPC endpoint. Applications already have IAM permissions to the bucket. Which additional configuration most directly enforces the network-origin requirement at the bucket?",
  opts:[
    "Add an S3 bucket policy that uses the appropriate VPC endpoint condition key.",
    "Add a security group rule to the S3 bucket.",
    "Associate the bucket with the endpoint's subnet.",
    "Enable an Elastic IP address on the gateway endpoint."
  ], ans:[0],
  exp:"A is correct. An S3 bucket policy can enforce a condition requiring requests to originate through a specified VPC endpoint. S3 buckets do not have security groups or subnets, and gateway endpoints do not use Elastic IPs."
},
{
  id:25, cat:"VPC Endpoints & PrivateLink", level:"Exam", multi:false,
  q:"A software vendor runs a service behind a Network Load Balancer in its VPC. Hundreds of customer VPCs need private access to only this service. The vendor does not want to manage peering routes or expose broader network connectivity between VPCs. Which AWS capability best fits this requirement?",
  opts:[
    "AWS PrivateLink with a VPC endpoint service and customer interface endpoints",
    "A full mesh of VPC peering connections",
    "Public IP addresses with source-IP allow lists",
    "A shared NAT gateway in the vendor VPC"
  ], ans:[0],
  exp:"A is correct. PrivateLink exposes a specific service privately through an endpoint service and consumer interface endpoints without creating full VPC-to-VPC routing."
},
{
  id:26, cat:"VPC Endpoints & PrivateLink", level:"Hard", multi:false,
  q:"Two application teams have VPCs with overlapping CIDR blocks. Team A must consume a private API hosted by Team B. Readdressing either VPC is not currently possible, and the teams want to avoid exposing the API publicly. Which design is MOST suitable?",
  opts:[
    "Create VPC peering and rely on security groups to resolve the overlapping routes.",
    "Use AWS PrivateLink to expose the API service privately from Team B to Team A.",
    "Create a Transit Gateway attachment for both VPCs and ignore the overlapping CIDRs.",
    "Create a public NAT gateway in both VPCs and route the overlapping CIDRs through them."
  ], ans:[1],
  exp:"B is correct. PrivateLink provides service-level connectivity without requiring full routed connectivity, making it a strong fit when overlapping CIDRs make normal peering or transit routing impractical."
},
{
  id:27, cat:"VPC Endpoints & PrivateLink", level:"Exam", multi:false,
  q:"A company is comparing gateway and interface VPC endpoints for Amazon S3. The workload is entirely inside one VPC and there is no on-premises or cross-VPC requirement. Cost is the primary concern. Which endpoint type should usually be preferred?",
  opts:[
    "Gateway endpoint, because it has no additional endpoint charge for S3.",
    "Interface endpoint, because it never creates ENIs.",
    "Interface endpoint, because gateway endpoints require a NAT gateway.",
    "Gateway endpoint, because it can be accessed through Transit Gateway from any VPC."
  ], ans:[0],
  exp:"A is correct. For in-VPC S3 access, a gateway endpoint is usually preferred on cost because there is no additional endpoint charge. Interface endpoints create ENIs and incur hourly and data-processing charges."
},
{
  id:28, cat:"VPC Endpoints & PrivateLink", level:"Hard", multi:false,
  q:"An application in VPC-A needs private access to Amazon S3. The architects also want applications in VPC-B, connected to VPC-A through a Transit Gateway, to reuse the same endpoint path. Which statement is correct?",
  opts:[
    "An S3 gateway endpoint in VPC-A can automatically serve VPC-B through the Transit Gateway.",
    "An S3 interface endpoint is a more appropriate design if private access must be reachable from connected VPCs.",
    "Gateway and interface endpoints are identical for routing purposes.",
    "VPC-B must use an internet gateway because private S3 access cannot cross VPC boundaries."
  ], ans:[1],
  exp:"B is correct. Gateway endpoints are scoped to the VPC route tables in which they are configured and are not reused through Transit Gateway. Interface endpoints expose private ENI addresses and can support connected-network access patterns with correct DNS and routing."
},
{
  id:29, cat:"VPC Endpoints & PrivateLink", level:"Hard", multi:false,
  q:"A company created an interface VPC endpoint for an AWS service, but EC2 instances still resolve the service's standard regional hostname to public IP addresses and continue using the NAT gateway. Routing and security groups are otherwise correct. What configuration should the architect check FIRST?",
  opts:[
    "Private DNS for the interface endpoint and the VPC DNS resolution settings",
    "The S3 gateway endpoint route table",
    "The instances' Elastic IP associations",
    "The internet gateway's security group"
  ], ans:[0],
  exp:"A is correct. Interface endpoint private DNS can make the standard service hostname resolve to the endpoint's private IPs, assuming the VPC DNS settings are appropriate. The other options do not explain the public DNS resolution behavior."
},
{
  id:30, cat:"VPC Peering & Transit Gateway", level:"Exam", multi:false,
  q:"A company has VPC-A, VPC-B, and VPC-C. A is peered with B, and B is peered with C. The company expects instances in A to reach instances in C by routing through B, but the traffic fails. What is the reason?",
  opts:[
    "VPC peering does not support transitive routing.",
    "VPC peering supports only public IPv4 addresses.",
    "VPC peering works only inside one Availability Zone.",
    "VPC peering requires a NAT gateway in the middle VPC."
  ], ans:[0],
  exp:"A is correct. VPC peering is non-transitive. A-to-B and B-to-C do not create an A-to-C path. A separate A-C connection or a transitive service such as Transit Gateway is required."
}
]);