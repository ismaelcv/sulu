<?php

/*
 * This file is part of the Sulu.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Bundle\SnippetBundle\Controller;

use FOS\RestBundle\Routing\ClassResourceInterface;
use Sulu\Component\Content\Compat\Structure;
use Sulu\Component\Content\Compat\StructureManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * handles snippet template.
 */
class SnippetTypesController extends Controller implements ClassResourceInterface
{
    /**
     * Returns all snippet types.
     *
     * @return JsonResponse
     */
    public function cgetAction()
    {
        /** @var StructureManagerInterface $structureManager */
        $structureManager = $this->get('sulu.content.structure_manager');
        $types = $structureManager->getStructures(Structure::TYPE_SNIPPET);

        $templates = [];
        foreach ($types as $type) {
            $templates[] = [
                'template' => $type->getKey(),
                'title' => $type->getLocalizedTitle($this->getUser()->getLocale()),
            ];
        }

        $data = [
            '_embedded' => $templates,
            'total' => count($templates),
        ];

        return new JsonResponse($data);
    }
}
