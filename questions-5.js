window.ALL_QUESTIONS.push(...[
{
  id:41, cat:"VPN & Direct Connect", level:"Exam", multi:false,
  q:"A financial company transfers large datasets continuously between its data center and AWS. The workload requires more predictable network performance than an internet-based VPN can provide. Which service should the company evaluate FIRST?",
  opts:["AWS Direct Connect","A public NAT gateway","VPC peering","Amazon CloudFront"], ans:[0],
  exp:"A is correct. Direct Connect provides dedicated connectivity to AWS and is commonly chosen for high-throughput hybrid workloads that need a more consistent network experience."
},
{
  id:42, cat:"VPN & Direct Connect", level:"Hard", multi:false,
  q:"A company uses AWS Direct Connect as its primary hybrid link. Management wants a cost-effective backup path that can take over if the Direct Connect circuit fails. Lower performance during a failure is acceptable. Which solution is MOST appropriate?",
  opts:["Provision a Site-to-Site VPN as a backup path.","Provision a second internet gateway in the VPC.","Use VPC peering to the corporate router.","Use an S3 interface endpoint as the backup hybrid connection."], ans:[0],
  exp:"A is correct. A Site-to-Site VPN is a common cost-effective backup for Direct Connect when reduced performance during failover is acceptable."
},
{
  id:43, cat:"VPN & Direct Connect", level:"Hard", multi:false,
  q:"A company has one Direct Connect connection in us-east-1 and must reach private VPC resources in multiple AWS Regions. The company wants to reuse the existing private connectivity rather than order a separate physical Direct Connect circuit in every Region. Which component is designed for this requirement?",
  opts:["AWS Direct Connect gateway","An internet gateway in every VPC","A NAT gateway in every Region","A VPC gateway endpoint"], ans:[0],
  exp:"A is correct. A Direct Connect gateway extends a Direct Connect design to supported gateway architectures across multiple Regions without requiring a separate physical circuit for every Region."
},
{
  id:44, cat:"VPN & Direct Connect", level:"Hard", multi:false,
  q:"A security requirement says that traffic between the corporate network and AWS must use a dedicated private network path and must also be encrypted in transit. The organization already has Direct Connect. Which architecture best satisfies both goals?",
  opts:["Use an IPsec VPN over the Direct Connect path where supported by the chosen design.","Use Direct Connect alone because all Direct Connect traffic is automatically IPsec encrypted.","Replace Direct Connect with an internet gateway.","Use VPC peering between the data center and AWS."], ans:[0],
  exp:"A is correct. Direct Connect provides a private dedicated path, but basic Direct Connect connectivity is not the same as IPsec encryption. A VPN-over-DX design can add encryption while retaining the dedicated network path."
},
{
  id:45, cat:"VPN & Direct Connect", level:"Exam", multi:false,
  q:"In an AWS Site-to-Site VPN architecture that terminates on a virtual private gateway, what does the customer gateway represent?",
  opts:["The VPN endpoint or device on the customer side of the connection","The internet gateway attached to the VPC","The NAT gateway used by private subnets","The AWS-managed route table for the VPC"], ans:[0],
  exp:"A is correct. The customer gateway represents the customer-side VPN device or software endpoint and its configuration. The virtual private gateway is the classic AWS-side VPN concentrator for the VPC."
},
{
  id:46, cat:"VPN & Direct Connect", level:"Hard", multi:false,
  q:"A company has several branch offices, each with a Site-to-Site VPN to the same AWS VPC. The branches also need to communicate securely with one another through the AWS VPN hub, and the company wants to use dynamic routing. Which AWS networking architecture matches this requirement?",
  opts:["AWS VPN CloudHub","VPC peering","S3 Transfer Acceleration","An egress-only internet gateway"], ans:[0],
  exp:"A is correct. VPN CloudHub is a hub-and-spoke architecture that uses multiple Site-to-Site VPN connections terminating on the same AWS-side VPN hub with appropriate routing."
},
{
  id:47, cat:"VPN & Direct Connect", level:"Hard", multi:false,
  q:"A company is ordering a new Direct Connect connection, but physical provisioning will take several weeks. An application migration must start next week and needs private VPC reachability from on premises. What should the architect recommend?",
  opts:["Establish a Site-to-Site VPN now and migrate to or combine it with Direct Connect when the circuit is ready.","Wait for Direct Connect because VPN cannot reach private VPC addresses.","Assign public IPv4 addresses to all private EC2 instances.","Use a gateway endpoint to connect the data center to the VPC."], ans:[0],
  exp:"A is correct. Site-to-Site VPN can provide encrypted private VPC reachability much faster than physical Direct Connect provisioning and is often used as an interim or backup path."
},
{
  id:48, cat:"VPN & Direct Connect", level:"Hard", multi:false,
  q:"A company uses BGP over a resilient hybrid architecture. The network team wants Direct Connect to be preferred during normal operation and a Site-to-Site VPN to be used only if the Direct Connect path becomes unavailable. Which design principle is appropriate?",
  opts:["Configure routing preferences so the Direct Connect path is preferred and the VPN path is less preferred.","Configure both paths identically and rely on DNS round robin.","Remove routing from the VPN until a failure is detected manually.","Route the VPN through a NAT gateway to lower its priority."], ans:[0],
  exp:"A is correct. Hybrid routing can be designed so the Direct Connect route is preferred while VPN provides backup. DNS and NAT do not control BGP path preference."
},
{
  id:49, cat:"DNS & Hybrid VPC", level:"Hard", multi:false,
  q:"EC2 instances in a VPC must resolve private DNS names hosted by the company's on-premises DNS servers. The VPC is connected to on premises through Transit Gateway. The company wants a managed DNS forwarding solution. Which configuration is MOST appropriate?",
  opts:["Create a Route 53 Resolver outbound endpoint and forwarding rules for the on-premises domains.","Create a public Route 53 hosted zone for the private names.","Use an S3 gateway endpoint as a DNS forwarder.","Add the on-premises DNS IP addresses to every security group."], ans:[0],
  exp:"A is correct. Route 53 Resolver outbound endpoints and forwarding rules forward selected VPC DNS queries to on-premises DNS servers over hybrid connectivity."
},
{
  id:50, cat:"DNS & Hybrid VPC", level:"Hard", multi:false,
  q:"On-premises clients must resolve private records from Route 53 private hosted zones associated with a VPC. Network connectivity to AWS already exists. Which managed component should be deployed in the VPC?",
  opts:["A Route 53 Resolver inbound endpoint","A Route 53 Resolver outbound endpoint only","A NAT gateway","An egress-only internet gateway"], ans:[0],
  exp:"A is correct. Resolver inbound endpoints accept DNS queries from connected networks such as on-premises environments and resolve them through Route 53 Resolver. Outbound endpoints solve the opposite direction."
}
]);