// import { InternalEvent, Optional, PublishEvent, SubscribeTo, Unsubscribe } from '@/shared/types';
// import mitt from 'mitt';

// export const createBus = <T extends string>() => {
//   const emitter = mitt<Record<InternalEvent<T>, Optional<string>>>();

//   const publishEvent: PublishEvent = emitter.emit;
//   const subscribeTo: SubscribeTo = emitter.on;
//   const unsubscribeFrom: Unsubscribe = emitter.off;

//   return {
//     publishEvent,
//     subscribeTo,
//     unsubscribeFrom
//   }
// }
