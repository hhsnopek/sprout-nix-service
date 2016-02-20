exports.configure = [
	{
		name: 'name',
		message: 'Your service\'s name'
	},{
		name: 'description',
		message: 'A brief description of your project'
	},{
		name: 'user',
		message: 'User which the service will run under',
		default: '$NAME'
	},{
		name: 'group',
		message: 'Group which the service will run under',
		default: '$NAME'
	},{
		name: 'path',
		message: 'Path to binary',
		default: '/user/bin/${NAME}'
	},{
		name: 'args',
		message: 'Arguments passed to the service startup'
	},{
		name: 'work_dir',
		message: 'Working directory where the service will be started',
		default: '/var/lib/${NAME}'
	},{
		name: 'pid_file',
		message: 'Pid file location',
		default: '/var/run/${NAME}.pid'
	},{
		name: 'script_name',
		message: 'Location of this init script',
		default: '/etc/init.d/$NAME'
	},{
		name: 'log_path',
		message: 'Standard output & Standard error path',
		default: '/var/lag/$NAME'
	}
];

exports.after = function(utils, config) {
	return utils.target.rename('service', config.name)
};
