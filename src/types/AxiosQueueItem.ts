export default interface AxiosQueueItem {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}
