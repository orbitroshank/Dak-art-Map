import L from "leaflet";

export function createPinIcon(color: string = "currentColor") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <!-- Outer pin shape -->
      <path fill-rule="evenodd" clip-rule="evenodd" fill="${color}"
        d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.370.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.260l-.002-.002a18.146 18.146 0 0 1-.309-.380l-.133-.163a.999.999 0 0 1-.130-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"/>
      <!-- White center circle -->
      <circle cx="12" cy="10" r="3" fill="#fff"/>
    </svg>`;

  return new L.DivIcon({
    html: svg,
    className: "custom-pin-icon",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
}
