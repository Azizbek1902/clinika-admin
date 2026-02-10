// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react-refresh/only-export-components */
// import { useEffect, useMemo, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet.markercluster/dist/leaflet.markercluster';
// import 'leaflet.markercluster/dist/MarkerCluster.css';
// import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
// import 'leaflet-plugins/layer/tile/Yandex';
// import { Button } from 'antd';
// import { IoClose } from 'react-icons/io5';
// import { FiltersWrapper, MapWrapper } from './style';
// import { useSelector, type RootState } from '../../store';
// import CustomSelect from '../FormElements/Select';
// import DatePickerComponent from '../FormElements/Datepicker';
// import userIcon from '../../assets/icons/user.png';
// import province from '../../services/leader/province';
// import provinceGroup from '../../services/groupLeader/province';
// import group from '../../services/leader/group';
// import { useNavigate } from 'react-router-dom';

// import ferganaArea from '../../constants/fergana.json';
// import andijonArea from '../../constants/andijon.json';
// import buxoroArea from '../../constants/buxoro.json';
// import jizzaxArea from '../../constants/jizzax.json';
// import namanganArea from '../../constants/namangan.json';
// import navoiyArea from '../../constants/navoiy.json';
// import qashqadaryoArea from '../../constants/qashqadaryo.json';
// import qoraqalpogistanArea from '../../constants/qoraqalpogistan.json';
// import samarkandArea from '../../constants/samarkand.json';
// import sirdaryoArea from '../../constants/sirdaryo.json';
// import surxondaryoArea from '../../constants/surxondaryo.json';
// import tashkentArea from '../../constants/tashkent.json';
// import toshkentvArea from '../../constants/toshkentv.json';
// import xorazmArea from '../../constants/xorazm.json';
// import uzbekistan_regional from '../../constants/uzbekistan_regional.json';
// import markerIcon from '../../assets/icons/marker.svg';

// interface Props {
//   data: {
//     lat: number;
//     long: number;
//     username: string;
//     phone: string;
//     image: string;
//     time?: string;
//   }[];
//   filters: {
//     province: string;
//     group: string;
//     date?: string;
//   };
//   setFilters?: (f: { province: string; group: string; date: string }) => void;
//   filterPermissions?: string[];
//   line?: boolean;
// }

// interface IMapOption {
//   coords?: [number, number] | null;
//   prefix?: number | null;
// }
// interface IOptions extends IMapOption {
//   label: string;
//   value: string;
// }

// const activeArea: Record<number, any> = {
//   230100: qoraqalpogistanArea,
//   170100: andijonArea,
//   200100: buxoroArea,
//   130100: jizzaxArea,
//   180100: qashqadaryoArea,
//   210100: navoiyArea,
//   160100: namanganArea,
//   140100: samarkandArea,
//   110000: toshkentvArea,
//   190100: surxondaryoArea,
//   120100: sirdaryoArea,
//   150100: ferganaArea,
//   220100: xorazmArea,
//   100000: tashkentArea,
// };

// const customIcon = L.icon({
//   iconUrl: markerIcon,
//   iconSize: [40, 40], // icon o‘lchami (xohlagancha o‘zgartir)
//   iconAnchor: [20, 40], // icon markaz nuqtasi (pastki markazda)
//   popupAnchor: [0, -35], // popup chiqish joyi (icon ustida)
//   className: 'custom-marker', // optional: CSS qo‘shmoqchi bo‘lsang
// });

// // =========================== COMPONENT ===========================
// export default ({
//   data = [],
//   filters,
//   setFilters,
//   filterPermissions,
//   line,
// }: Props) => {
//   const baseURL = import.meta.env.VITE_IMAGE_URL;
//   const navigate = useNavigate();
//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const mapInstance = useRef<L.Map | null>(null);
//   const markerLayer = useRef<L.MarkerClusterGroup | null>(null);

//   const {
//     role,
//     prefix,
//     province: provinceId,
//   } = useSelector((state: RootState) => state.auth);

//   const [provinces, setProvinces] = useState<IOptions[]>([]);
//   const [groups, setGroups] = useState<IOptions[]>([]);
//   const [mapOptions, setMapOptions] = useState<IMapOption>({
//     prefix: prefix ?? null,
//     coords: null,
//   });

//   const isLeader = useMemo(() => ['leader'].includes(role ?? ''), [role]);

//   const polyStyle = useMemo(
//     () => ({
//       fillColor: '#F6932099',
//       color: '#F69320',
//     }),
//     []
//   );

//   // 🗺️ 1. Xarita 1 marta yaratiladi
//   useEffect(() => {
//     if (!mapRef.current || mapInstance.current) return;

//     const map = L.map(mapRef.current, {
//       attributionControl: false,
//       minZoom: 6,
//       maxZoom: 18,
//     }).setView([41.39894, 64.868302], 7);

//     const yndx = new L.Yandex('map');
//     map.addLayer(yndx);

//     mapInstance.current = map;

//     return () => {
//       map.off();
//       map.remove();
//       mapInstance.current = null;
//     };
//   }, []);

//   // 🧭 2. Xarita viloyat o‘zgarsa zoom va polygonni yangilaydi
//   useEffect(() => {
//     const map = mapInstance.current;
//     if (!map) return;

//     map.eachLayer((layer) => {
//       if ((layer as any)?.options?.fillColor) map.removeLayer(layer);
//     });

//     const area =
//       activeArea[mapOptions?.prefix ?? prefix ?? 0] ?? uzbekistan_regional;
//     L.geoJSON(area, { style: () => polyStyle }).addTo(map);

//     if (mapOptions?.coords) {
//       map.setView(mapOptions.coords, 10);
//     } else {
//       map.setView([41.39894, 64.868302], 7);
//     }
//   }, [mapOptions, polyStyle, prefix]);

//   // // 📍 3. Markerlarni render qilish
//   // useEffect(() => {
//   //   const map = mapInstance.current;
//   //   if (!map) return;

//   //   // Eski markerlarni o‘chirish
//   //   if (markerLayer.current) {
//   //     map.removeLayer(markerLayer.current);
//   //   }

//   //   const markers = L.markerClusterGroup({ chunkedLoading: true });

//   //   data.forEach((point) => {
//   //     if (!point?.lat || !point?.long) return;

//   //     const marker = L.marker([+point.lat, +point.long]);
//   //     const popup = document.createElement('div');
//   //     popup.className = 'custom-popup-content';

//   //     const img = document.createElement('img');
//   //     img.src = point.image ? `${baseURL}/${point.image}` : userIcon;
//   //     popup.appendChild(img);

//   //     const username = document.createElement('h3');
//   //     username.textContent = point.username;
//   //     popup.appendChild(username);

//   //     if (point.phone) {
//   //       const phone = document.createElement('p');
//   //       phone.innerHTML = `
//   //       <svg stroke="currentColor" fill="#487fff" stroke-width="0" version="1.1" viewBox="0 0 14 14" height="1em" width="1em"><path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"></path></svg>
//   //       <span style="color:#323232"><a href="tel:+998${point.phone}" target="_blank">+998${point.phone}</a></span>
//   //     `;
//   //       popup.appendChild(phone);
//   //     }

//   //     if (point.time) {
//   //       const time = document.createElement('p');
//   //       time.innerHTML = `
//   //       <svg stroke="currentColor" fill="#487fff" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em"><path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" clip-rule="evenodd"></path></svg>
//   //        <span style="color:#323232">${point.time}</span>
//   //     `;
//   //       popup.appendChild(time);
//   //     }

//   //     marker.bindPopup(popup);
//   //     markers.addLayer(marker);
//   //   });

//   //   map.addLayer(markers);
//   //   markerLayer.current = markers;
//   //   // eslint-disable-next-line
//   // }, [data]);

//   // 📍 3. Markerlarni render qilish
//   useEffect(() => {
//     const map = mapInstance.current;
//     if (!map) return;

//     // Eski marker va chiziqlarni o‘chirish
//     if (markerLayer.current) {
//       map.removeLayer(markerLayer.current);
//     }

//     map.eachLayer((layer: any) => {
//       if (layer instanceof L.Polyline && !(layer instanceof L.Polygon)) {
//         map.removeLayer(layer);
//       }
//     });

//     const markers = L.markerClusterGroup({ chunkedLoading: true });
//     const lineCoords: [number, number][] = [];

//     data.forEach((point) => {
//       if (!point?.lat || !point?.long) return;

//       const coords: [number, number] = [+point.lat, +point.long];
//       lineCoords.push(coords);

//       const marker = L.marker(coords, { icon: customIcon });
//       const popup = document.createElement('div');
//       popup.className = 'custom-popup-content';

//       if (line) {
//         popup.innerHTML = `
//     <div style="
//       background: white;
//       border-radius: 10px;
//       font-size: 14px;
//       font-weight: 500;
//       color: #333;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       min-width: 80px;
//       padding: 6px 10px;
//       box-shadow: 0 2px 8px rgba(0,0,0,0.15);
//     ">
//       <svg stroke="currentColor" fill="#487fff" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" style="margin-right:6px">
//         <path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" clip-rule="evenodd"></path>
//       </svg>
//       ${point.time ? point.time : ''}
//     </div>
//   `;

//         // Popup bog‘lash
//         marker.bindPopup(popup, {
//           autoClose: false,
//           closeButton: false,
//           closeOnClick: false,
//         });

//         if (line) {
//           marker.on('add', () => {
//             marker.openPopup();
//           });
//         }
//       } else {
//         const img = document.createElement('img');
//         img.src = point.image ? `${baseURL}/${point.image}` : userIcon;
//         popup.appendChild(img);

//         const username = document.createElement('h3');
//         username.textContent = point.username;
//         popup.appendChild(username);

//         if (point.phone) {
//           const phone = document.createElement('p');
//           phone.classList.add('phone-with-icons');
//           phone.innerHTML = `
//         <svg stroke="currentColor" fill="#487fff" stroke-width="0" version="1.1" viewBox="0 0 14 14" height="1em" width="1em"><path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"></path></svg>
//         <span style="color:#323232"><a href="tel:+998${point.phone}" target="_blank">+998${point.phone}</a></span>
//       `;
//           popup.appendChild(phone);
//         }

//         if (point.time) {
//           const time = document.createElement('p');
//           time.classList.add('time-with-icons');
//           time.innerHTML = `
//         <svg stroke="currentColor" fill="#487fff" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em"><path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" clip-rule="evenodd"></path></svg>
//         <span style="color:#323232">${point.time}</span>
//       `;
//           popup.appendChild(time);
//         }

//         marker.bindPopup(popup);
//       }
//       markers.addLayer(marker);
//     });

//     map.addLayer(markers);
//     markerLayer.current = markers;

//     if (line && lineCoords?.length > 0) {
//       // const polyline =
//       L.polyline(lineCoords, {
//         color: '#487fff',
//         weight: 3,
//         opacity: 0.8,
//         smoothFactor: 1,
//       }).addTo(map);

//       // Xarita markaziga olib boramiz
//       // map.fitBounds(polyline.getBounds(), {
//       //   padding: [30, 30],
//       //   animate: false,
//       // });
//     }
//     // eslint-disable-next-line
//   }, [data, line]);

//   // 🗂️ 4. Viloyatlar va guruhlar ma’lumotlari
//   useEffect(() => {
//     if (isLeader) {
//       province
//         .getAll()
//         .then((res) => {
//           const list = res.data?.map((itm: any) => ({
//             label: itm.title,
//             value: itm._id,
//             coords: itm.coordinates,
//             prefix: itm.prefix,
//           }));
//           setProvinces(list);
//         })
//         .catch(console.error);
//     } else {
//       provinceGroup.getOne(provinceId).then((res) => {
//         setMapOptions({
//           coords: res.data?.coordinates,
//           prefix: res.data?.prefix,
//         });
//       });
//     }
//   }, [isLeader, provinceId]);

//   useEffect(() => {
//     if (isLeader && filters?.province) {
//       group
//         .getAll(`province=${filters.province}`)
//         .then((res) => {
//           setGroups(
//             res.data?.map((g: any) => ({
//               label: g.title,
//               value: g._id,
//             }))
//           );
//         })
//         .catch(console.error);
//     }
//   }, [filters?.province, isLeader]);

//   useEffect(() => {
//     if (filters?.province) {
//       const selected = provinces.find((p) => p.value === filters.province);
//       setMapOptions({
//         coords: selected?.coords ?? null,
//         prefix: selected?.prefix ?? null,
//       });
//     } else {
//       setMapOptions({ coords: null, prefix: null });
//     }
//   }, [filters?.province, provinces]);

//   const handleClose = () => navigate(-1);

//   // 🧩 UI
//   return (
//     <MapWrapper $line={line}>
//       <div ref={mapRef} id="map" style={{ width: '100vw', height: '100vh' }} />

//       <FiltersWrapper>
//         <>
//           {isLeader && filterPermissions?.includes('province') && (
//             <CustomSelect
//               options={provinces}
//               placeholder="Viloyat"
//               $width="200px"
//               onChange={(e) =>
//                 setFilters &&
//                 setFilters({ ...filters, province: e, group: '', date: '' })
//               }
//               value={filters.province || null}
//               allowClear
//             />
//           )}

//           {isLeader && filterPermissions?.includes('province') && (
//             <CustomSelect
//               options={filters.province ? groups : []}
//               placeholder="Guruh"
//               $width="200px"
//               onChange={(e) =>
//                 setFilters && setFilters({ ...filters, group: e, date: '' })
//               }
//               value={filters.group || null}
//               allowClear
//             />
//           )}

//           {filterPermissions?.includes('date') && (
//             <DatePickerComponent
//               onChange={(e) =>
//                 setFilters &&
//                 setFilters({ ...filters, date: e as string, group: '' })
//               }
//               value={filters.date || null}
//               format="YYYY-MM-DD"
//               height="44px"
//               picker="date"
//               width="160px"
//             />
//           )}
//         </>
//         <Button onClick={handleClose}>
//           <IoClose size={22} />
//         </Button>
//       </FiltersWrapper>
//     </MapWrapper>
//   );
// };
