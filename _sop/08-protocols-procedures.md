---
part: "08"
num: "8"
title: "Protocols & Procedures"
tag: "Standardisation"
meta: "Transfers · Hubs · Hump"
---
## 8.1 Protocols

- A Protocol is a grouping of Procedures.
- An operation may not run a specific protocol at all times but may hold a standard protocol. Company Realistic may ordinarily run Protocol US OPS, while a Controller may log on and change the protocol or the individual procedures.
- Controllers are not compelled to run a protocol, but where a protocol is activated by a Controller it shall be followed by crews.

## 8.2 Procedures

- Procedures are standardised sets of expectations, which may include restrictions, requirements, and other pertinent information.
- A Controller may or may not activate a procedure. Where a procedure is chosen it shall be followed by crews.
- Unlike protocols, multiple procedures may be activated together where they do not conflict, and may be run under a New Procedure.
- New procedures may be devised by a crew or Controller and are not required to appear in this document. Once tested and in frequent use they may be standardised and published here.

## 8.3 Protocol List

| Protocol | Constituent Procedures |
| --- | --- |
| US OPS | Harbour Default |
| EU OPS | Central Hump |
| EU 2 OPS | Central Vanilla |

> **NOTICE** EU OPS carries one further unnamed procedure pending publication.
{: .danger}

## 8.4 Transfers

A transfer occurs whenever a locomotive or consist leaves a Controller’s zone.

- Handover. The consist is immediately entering the zone of another Controller. The Controller shall instruct the driver to change voice channels to, and make contact with, the receiving Controller.
  - On double track: the consist shall be lined to the right-hand track; clearance shall be granted up to but not past the end of double track; the receiving Controller may be notified but need not be.
  - On single track: the receiving Controller shall be notified and the XFER accepted before clearance is given. An accepted transfer is a confirmed /xfer command or a verbal or written confirmation. Clearance shall be granted up to the next switch.
- Exit. The consist leaves into Dark Territory. No channel change or contact is required, but it shall be made clear that the Controller no longer holds jurisdiction.

> **Handover - example**
>
> "086, HB Control, your transfer is approved. Switch to and contact Dispatch East."
{: .example}

## 8.5 Hubs - Central

The purpose of the Central Hub is centralised sorting, such that Road Crew may take longer jobs without requiring matching destinations at departure. On arrival at the hub a crew is assigned a new train already prepared to depart. Loading tracks are designated L; storage tracks are designated S.

- All inbound signals shall be set to Stop by default. Use the merging point of double track as the entry signal to retain flexibility where Dispatch is late with the XFER.
- On an inbound XFER request from any station, determine when the train will arrive.
  - Where arrival is imminent and a free track of sufficient length is available, set the switches and corresponding entry signal while accepting the transfer.
  - Where space is unavailable and arrival is imminent, ensure the train has stopped at the entry signal and accept the transfer.
  - Where arrival is not imminent, plan ahead to avoid a shunting manoeuvre in progress at the train’s ETA.
- Manoeuvres conflicting with an inbound train shall be commenced only where they are expected to finish before that train arrives.

> **NOTICE** Central Vanilla inherits the defaults above; specifics not yet expanded.
{: .danger}

## 8.6 Central Hump Procedure

Applies where an unsorted train is received into either empty yard connected to the hump track.

- Assign tracks. Review the destinations held and assign a compatible track in the yard opposite the hump track according to car count.
  - Keep one track free for sudden inbound trains and to permit running around to the far side of the yard.
  - Where destinations exceed available tracks, assign a mismatch track for a later hump in the opposite direction.
  - Two destinations lying close together may share a track where the resulting shunting demand at the first drop-off remains minimal.
- Prepare cars. Couple all cars together, dump the air without recharging, uncouple all cars from each other, then release the brakes on all cars.
- Hump. Push with a power-limited or carefully controlled locomotive, not exceeding the speeds tabled below. Pushing speed governs the rate cars enter the yard and therefore the time available to flip junctions; keep speeds low for laggy operations.
- Flip junctions. A junction may be flipped for the following car as soon as the preceding car is completely clear of it.
  - Junctions may require throwing in parallel, or in reverse order, where pushing speed is high.
  - Where a switch is missed, do not attempt to fix it - a drifting car would be detrimental. Reassign tracks to keep future shunting demand low, or re-hump later.
- Apply handbrakes. Apply as a car approaches the end of a track, maintaining half a car length of clearance to the next switch at all times, as following cars may push it along.
- Post-hump. Couple all loose cars together again. Where this is not done in external view, keep a handbrake applied at both ends of the consist to prevent coupling from pushing cars apart.

| Movement | Track | Pushing Speed |
| --- | --- | --- |
| FM to OWC | Hump track | 2 - 5 km/h |
| FM to OWC | Normal track (no Double Track) | 7 - 10 km/h |
| OWC to FM | Hump track | 2 - 10 km/h |

FM to OWC on normal track is the most demanding mode, as cars enter the yard at a materially faster rate.

| Locomotive | Hump Handling |
| --- | --- |
| DE2 | Notch 1. Where tonnage exceeds one locomotive, add a second DE2 also in notch 1 to prevent slipping and overheating. A crew member shall stand by to cut or reduce power as the train is nearly fully humped. |
| DM3 | First gear, throttle between 1 and 6 according to load. No standby crew required, as first gear will not catch the humped cars. |
| S060 | Crew shall be in the cab at all times. Not yet tested. |
| DH4 | Crew shall be in the cab at all times. Not yet tested. |

> **NOTICE** Harbor, Signals, Traffic Patterns, Crop Circle, and High Flow procedures reserved - not yet published.
{: .danger}
