import styled from 'styled-components';

export const MapWrapper = styled.div<{ $line?: boolean }>`
  .leaflet-popup-content {
    margin: 0px !important;
  }
  .custom-popup-content {
    width: ${({ $line }) => ($line ? '' : '170px')};
    padding: ${({ $line }) => ($line ? '0px' : '15px')};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 12px;
  }

  .custom-popup-content img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .custom-popup-content h3 {
    margin: 0 0 5px 0;
    font-size: 16px;
    font-weight: 600;
  }

  .custom-popup-content .phone-with-icons,
  .custom-popup-content .time-with-icons {
    margin: 0 0 10px 0;
    font-size: 14px;
    color: #555;
    width: 100%;
  }

  .custom-popup-content button {
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    background-color: #039855;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease;
    width: 100%;
  }

  .custom-popup-content button:hover {
    background-color: #027a48;
  }
`;

export const FiltersWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1000;
  width: max-content;

  button {
    width: 44px;
    height: 44px;
    padding: 0;
  }
`;
