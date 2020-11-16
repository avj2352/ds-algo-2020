# AWS Global Infrastructure

## Features

- 69 Availability zones
- 22 Geographic regions
- More Edge locations than AZs
- Low latency
- High Availability
- **Regions** - Physical location in the world with multiple **Availability Zones (AZ)**
- **Availability Zones (AZ)** - one or more discrete data-centres
- **Edge Locations** - data-centre owned by a trusted partner of AWS

## Regions

:exclamation: A **geographically distinct** location which has multiple data-centres (AZs)

- Each region has atleast **2 Availability Zones (AZs)**
- Every **region** is **physically isolated** & **independent** to every other region in terms of - location, power, water supply
- :exclamation:AWS largest region is **US-EAST** (ie., North Virginia)
- :exclamation:Services almost always available first in **US-EAST**
- Not all services are available in all regions
- :exclamation:**US-EAST-1** is the region where you see all your billing information
- 5 new regions - under progress

- [AWS regional Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html)
- [3D world Model - AWS Regions](https://www.infrastructure.aws/)

## Availability Zones (AZs)

:exclamation: An AZ is a datacenter owned & operated by AWS in which their services run

- Each region has atleast **2 Availability Zones (AZs)**
- :exclamation: AZs are represented by a Region Code, followed by a letter identifier

```bash
# a - availability zone 'a'
us-east-1a 
# North Virginia has 6 Availability Zones
us-east-1a
us-east-1b
us-east-1c
us-east-1d
us-east-1e
us-east-1f

```

- **Multi-AZ:** Distributing your instances across multiple AZs allows failover configuration for handling requests when one goes down
- <10ms latency between AZz in a region

## Edge Locations

