# joinstr.xyz

Website for [joinstr](https://gitlab.com/invincible-privacy/joinstr/), a decentralized coinjoin implementation that uses nostr relays for coordination.

Static site, no build step. Open `index.html` to work on it, or serve the directory:

```sh
python3 -m http.server 8000
```

Based on [minimal-dark-theme](https://github.com/hanggrian/minimal-dark-theme), a fork of the [Minimal](https://github.com/orderedlist/minimal) theme by orderedlist.

## Notes

- Every asset is served from this origin. Do not add CDN links, remote fonts, analytics or hotlinked images.
- `assets/logo.svg` is hotlinked by other joinstr project pages. Keep that path stable.
- `.well-known/nostr.json` is the NIP-05 record for the domain and must stay reachable at the apex.
