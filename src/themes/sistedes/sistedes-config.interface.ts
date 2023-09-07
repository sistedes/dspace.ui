import { Config } from 'src/config/config.interface';

/**
 * Configuration optiones of the Sistedes theme
 */
export interface SistedesConfig extends Config {
  highlightedCommunities: {
    /**
   * The number of item showing in recent communities components
   */
    pageSize: number;

    /**
     * sort record of recent submission
     */
    sortField: string;

    /**
     * query used to retrieve the recent communities
     */
    query: string;
  }

}
