import { User } from './user';

export interface GithubResponse {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}
