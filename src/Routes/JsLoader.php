<?php

namespace Tualo\Office\D3Chart\Routes;

use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\Route as BasicRoute;
use Tualo\Office\Basic\RouteSecurityHelper;
use Tualo\Office\Basic\IRoute;

class JsLoader implements IRoute
{
    public static function register()
    {
        BasicRoute::add('/jsd3chart/(?P<file>[\w.\/\-]+).js', function ($matches) {
            RouteSecurityHelper::serveSecureStaticFile(
                $matches['file'],
                dirname(__DIR__, 1) . '/js/lazy',
                ['js'],
                ['application/javascript']
            );

            /*
            if (file_exists(dirname(__DIR__, 1) . '/js/lazy/' . $matches['file'] . '.js')) {
                App::contenttype('application/javascript');
                App::etagFile(dirname(__DIR__, 1) . '/js/lazy/' . $matches['file'] . '.js', true);
                BasicRoute::$finished = true;
                http_response_code(200);
            }*/
        }, ['get'], false);
        BasicRoute::add('/jsd3/(?P<file>[\w.\/\-]+).js', function ($matches) {

            RouteSecurityHelper::serveSecureStaticFile(
                $matches['file'],
                dirname(__DIR__, 1) . '/js/lib',
                ['js'],
                ['application/javascript']
            );
            /*

            if (file_exists(  dirname(__DIR__,1).'/js/lib/'.$matches['file'].'.js' ) ){
                App::contenttype('application/javascript');
                App::etagFile( dirname(__DIR__,1).'/js/lib/'.$matches['file'].'.js' , true);
                BasicRoute::$finished = true;
                http_response_code(200);
            }
                */
        }, ['get'], false);
    }
}
