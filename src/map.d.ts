import * as L from 'leaflet';

declare module 'leaflet' {
  class Yandex extends L.TileLayer {
    constructor(
      type: 'map' | 'satellite' | 'hybrid' | 'map~vector' | 'skeleton',
      options?: YandexOptions
    );
  }
  function markerClusterGroup(options?: any): L.MarkerClusterGroup;
}
