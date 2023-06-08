// These are the definitions of encoder wheel parameters
//
// The key is the value returned by EOS when the param is updated
// the value is the base name of the encoder variable, which will
// have both {value}_stringval and {value}_floatval variables created. 
//
// NOTE: key is lower case
//
const ParamMap = {
	'intens': 				'enc_intensity',
	'background intensity':	'enc_background_intensity',
	'zoom':					'enc_zoom',
	'edge':					'enc_edge',
	'iris':					'enc_iris',
	'pan':					'enc_pan',
	'tilt':					'enc_tilt',
	'x focus':				'enc_x_focus',
	'y focus':				'enc_y_focus',
	'z focus':				'enc_z_focus',
	'red':					'enc_red',
	'green':				'enc_green',
	'blue':					'enc_blue',
	'red main':				'enc_red_main',
	'green main':			'enc_green_main',
	'blue main':			'enc_blue_main',
	'white main':			'enc_white_main',
	'bgnd red':				'enc_bgnd_red',
	'bgnd grn':				'enc_bgnd_grn',
	'bgnd blu':				'enc_bgnd_blu',
	'bgnd_whi':				'enc_bgnd_whi',
	'white':				'enc_white',
	'cyan':					'enc_cyan',
	'magenta':				'enc_magenta',
	'yellow':				'enc_yellow',
	'amber':				'enc_amber',
	'lime':					'enc_lime',
	'indigo':				'enc_indigo',
	'uv':					'enc_uv',
	'red adj':				'enc_red_adj',
	'green adj':			'enc_green_adj',
	'blue adj':				'enc_blue_adj',
	'white adj':			'enc_white_adj',
	'cyan adj':				'enc_cyan_adj',
	'magenta adj':			'enc_magenta_adj',
	'yellow adj':			'enc_yellow_adj',
	'amber adj':			'enc_amber_adj',
	'lime adj':				'enc_lime_adj',
	'indigo adj':			'enc_indigo_adj',
	'hue':					'enc_hue',
	'cto':					'enc_cto',
	'ctb':					'enc_ctb',
	'color select':			'enc_color_select',
	'color mix mspeed':		'enc_color_mix_mspeed',
	'ctc':					'enc_ctc',
	'shutter strobe':		'enc_shutter_strobe',
	'saturatn':				'enc_saturation',
	'diffusion':			'enc_diffusion',
	'diffusion 2':			'enc_diffusion_2',
	'edge distance':		'enc_edge_distance',
	'position mspeed':		'enc_position_mspeed',
	'position blink':		'enc_position_blink',
	'color mix':			'enc_color_mix',
	'color mix 2':			'enc_color_mix_2',
	'background color mix':	'enc_background_color_mix',
	'cmixmaft':				'enc_cmixmaft',
	'cmixmart':				'enc_cmixmart',
	'color temperature':	'enc_color_temperature',
	'cri':					'enc_cri',
	'angle a':				'enc_angle_a',
	'angle b':				'enc_angle_b',
	'angle c':				'enc_angle_c',
	'angle d':				'enc_angle_d',
	'thrust a':				'enc_thrust_a',
	'thrust b':				'enc_thrust_b',
	'thrust c':				'enc_thrust_c',
	'thrust d':				'enc_thrust_d',
	'frame assembly':		'enc_frame_assembly',
	'gobo select':			'enc_gobo_select',
	'gobo ind/spd':			'enc_gobo_ind_spd',
	'gobo select 2':		'enc_gobo_select_2',
	'gobo ind/spd 2':		'enc_gobo_ind_spd_2',
	'gobo select 3':		'enc_gobo_select_3',
	'gobo ind/spd 3':		'enc_gobo_ind_spd_3',
	'beam fx select':		'enc_beam_fx_select',
	'beam fx ind/spd':		'enc_beam_fx_ind_spd',
	'beam fx select 2':		'enc_beam_fx_select_2',
	'beam fx ind/spd 2':	'enc_beam_fx_ind_spd_2',
	'animation select':		'enc_animation_select',
	'animation ind/spd':	'enc_animation_ind_spd',
	'cooling fan':			'enc_cooling_fan',
	'dim curve':			'enc_dim_curve',
	'global mspeed':		'enc_global_mspeed',
	'lt diffusion':			'enc_lt_diffusion',
	'med diffusion':		'enc_med_diffusion',
	'color mix mode':		'enc_color_mix_mode',
	'edge mode':			'enc_edge_mode',
	'edge adjust':			'enc_edge_adjust',
	'effect macros':		'enc_effect_macros',
	'form mspeed':			'enc_form_mspeed',
	'tint':					'enc_tint',
	'color temperature':	'enc_color_temperature',
	'color mix mode 2':		'enc_color_mix_mode_2',	
}

module.exports = { ParamMap }
