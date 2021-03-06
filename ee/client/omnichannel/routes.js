import { registerOmnichannelRoute } from '../../../client/omnichannel/routes';

registerOmnichannelRoute('/monitors', {
	name: 'omnichannel-monitors',
	lazyRouteComponent: () => import('./MonitorsPage'),
});

registerOmnichannelRoute('/priorities', {
	name: 'omnichannel-priorities',
	lazyRouteComponent: () => import('./priorities/PrioritiesRoute'),
});
