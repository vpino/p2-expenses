<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit64da0e25c874fd0d512b67157aea4440
{
    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Slim' => 
            array (
                0 => __DIR__ . '/..' . '/slim/slim',
            ),
        ),
    );

    public static $classMap = array (
        'PiramideUploader' => __DIR__ . '/../..' . '/piramide-uploader/PiramideUploader.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit64da0e25c874fd0d512b67157aea4440::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit64da0e25c874fd0d512b67157aea4440::$classMap;

        }, null, ClassLoader::class);
    }
}
