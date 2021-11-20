import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from '../store/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
