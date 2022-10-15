#!/usr/bin/env node

const { readFileSync } = require('fs');
const stats = JSON.parse(readFileSync('./.next/stats.json', 'utf8'));
stats.chunks
  .filter(({ names }) => names.find((name) => name.includes('pages/')))
  .forEach(({ names, siblings }) =>
    console.log(
      `${names[0].replace('pages/', '')} - ${siblings.join(', ') || 'None'}`,
    ),
  );
