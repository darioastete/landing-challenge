import { HeroLeadDTO } from "./types";

export async function postMessage(body: HeroLeadDTO) {
  const res = await fetch('/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
}

export async function getMessage() {
  const res = await fetch('/api/message');
  return await res.json();
}

export async function getHeroSection() {
  const res = await fetch('/api/hero');
  return await res.json();
}
