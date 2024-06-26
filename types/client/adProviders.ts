import type { ArrayElement } from 'types/utils';

export const SUPPORTED_AD_BANNER_PROVIDERS = [ 'slise', 'adbutler', 'coinzilla', 'hype', 'getit', 'none' ] as const;
export type AdBannerProviders = ArrayElement<typeof SUPPORTED_AD_BANNER_PROVIDERS>;

export const SUPPORTED_AD_TEXT_PROVIDERS = [ 'coinzilla', 'none' ] as const;
export type AdTextProviders = ArrayElement<typeof SUPPORTED_AD_TEXT_PROVIDERS>;
