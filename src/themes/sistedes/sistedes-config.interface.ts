import { Config } from 'src/config/config.interface';

/**
 * Configuration optiones of the Sistedes theme
 */
export interface SistedesConfig extends Config {
  recentCommunities: {
    /**
   * The number of item showing in recent communities components
   */
    pageSize: number;

    /**
     * query used to retrieve the recent communities
     */
    query: string;
  }

}
