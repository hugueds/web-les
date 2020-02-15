import msToTimeString from '../utils/msToTimeString';

export default class Footer {
    
    maxTakt: number = 0;
    taktTime: number = 0;
    andonStatus: number = 0;
    andonMessage: string = '';

    get taktString(): string {
        return msToTimeString(this.taktTime);
    }


}