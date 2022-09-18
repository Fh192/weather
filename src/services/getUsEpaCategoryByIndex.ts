import { IAirQuality, IAirQualityUsEpaCategory } from '../types';

export const getUsEpaCategoryByIndex = (
  index: IAirQuality['us-epa-index']
): IAirQualityUsEpaCategory => {
  switch (index) {
    case 1:
      return 'Good';
    case 2:
      return 'Moderate';
    case 3:
    case 4:
      return 'Unhealthy';
    case 5:
      return 'Very Unhealthy';
    default:
      return 'Hazardous';
  }
};
