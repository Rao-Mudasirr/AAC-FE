export interface ChatInfoModalPropsI {
  isUserProfile: boolean;
  setIsUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
  chatMode: string;
  activeParticipant: any;
}
