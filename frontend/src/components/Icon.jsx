const paths = {
  architecture: <><path d="M4 19h16M6 16V8l6-4 6 4v8M9 16v-5h6v5"/></>,
  code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></>,
  spark: <><path d="M12 3l1.4 4.1L17 9l-3.6 1.9L12 15l-1.4-4.1L7 9l3.6-1.9L12 3ZM18.5 15l.7 2.1L21 18l-1.8.9-.7 2.1-.7-2.1L16 18l1.8-.9.7-2.1Z"/></>,
  cloud: <path d="M7 18h11a4 4 0 0 0 .4-8A7 7 0 0 0 5 12.5 3 3 0 0 0 7 18Z"/>,
  pipeline: <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h5a3 3 0 0 1 3 3v6M12 18H8a3 3 0 0 1-3-3v-4"/></>,
  database: <><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></>,
  shield: <path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-5"/>,
  network: <><circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M12 7v4M5 16v-2h14v2"/></>,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
  terminal: <><path d="m5 7 4 4-4 4M11 17h8"/></>,
}

export default function Icon({ name, size = 24 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
