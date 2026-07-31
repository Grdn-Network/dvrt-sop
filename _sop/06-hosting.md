---
part: "06"
num: "6"
title: "Hosting"
tag: "Staff"
meta: "Setup · Debrief · Records"
---
## 6.1 Fundamentals

- Hosts shall communicate well in English, hold good standing with Command and the community, hold a stable connection and adequate PC specification, and demonstrate leadership.
- Prior to seeking the qualification a candidate shall hold C/W qualification and be familiar with the entire SOP.
- Hosts shall run operations IAW this SOP and shall select a save file fitting the requirements of the operation planned.
- Hosts are advised against purchasing the in-game dispatcher licence, and shall double-check mod settings, to limit trolling.
- Remote Dispatch permissions shall be limited to qualified individuals filling a role that requires them for that session.
  - Hosts may require sign-in under common usernames to avoid cluttering UMM settings - for example Yard Crew for junction permissions, Dispatch for junction and signal permissions.
- Operations and events shall be professionally posted and led.
- Where a host faces a decision without an answer, or an administrative issue, the host shall state that any decision made is temporary and route the issue to an administrator or Command. A host may time out a member causing issues.

## 6.2 Session Setup

Hosts receive a private channel; setup resources are pinned within it. This procedure assumes Windows.

| Resource | Purpose |
| --- | --- |
| Save.zip | Career save for the operation. |
| grdn_ops_ruleset | Ruleset attached to the save. |
| Mod Preset | Approved mod suite for the session. |

- Extract the career archive and copy the Career folder to AppData › LocalLow › Altfuture › Derail Valley › Users › [user] › Career, alongside existing saves. Hidden files may require display to be enabled.
- Place the ruleset file in the DV subdirectory under GameData › Assets. Create the Assets folder where it does not exist.
- Install the host mods as modifications are ordinarily installed.
- Verify by loading Derail Valley that the save is present with the ruleset attached.
- Access mod settings with CTRL+F10 and make the required changes, to include the Remote Dispatch password.
- Under dispatcher permissions set the Default entry to junctions off, loco control off, player blips on, and loco visibility on.
  - As a consequence the host shall grant Dispatch and Harbour permissions to change junctions when those Controllers come online.

## 6.3 Remote Dispatch Domain

For security, and for compatibility with our bot and mod functions, hosts shall publish Remote Dispatch through a Cloudflare tunnel rather than traditional port forwarding. The tunnel is comparable in concept to Hamachi or ZeroTier but provides a safer path than port forwarding, DNS configuration, or Hamachi.

- Obtain cloudflared from the Cloudflare Tunnel documentation downloads page, by installer or CLI command for your operating system.
- Contact Guardian for assistance. You shall be issued an elevated command-prompt entry that attaches your access token to the cloudflared application.
- You shall then be issued a domain - for example grdn.grdnnetwork.com - for Remote Dispatch, and by proxy a hidden URL through which GRDNConnect functions.

## 6.4 Debrief

- Hosts shall conduct a debrief.
- Gather information on the particular issues of that operation first, then gather general feedback as the debrief closes.
- Performance information shall be requested for each role.
- Learning is the priority. Personnel shall not be flamed for communications in a debrief environment.

## 6.5 Op Records

- Log files document issues and provide feedback to our developers. Open a new post in Op-Records, formerly Log Dumps.
- Title the post by class - Event, Operation, or Stress Test - followed by the date in MMDD format.
- Identify clearly which logs are the host’s and attach the files.
- Where many issues were observed, or for a stress test, all participants shall be encouraged to post logs.
- Log files are located at AppData/LocalLow/Altfuture/Derail Valley/player.log.
- The channel may also be used for debrief notes and Controller incident reports; #hosting may be used in the alternative.
