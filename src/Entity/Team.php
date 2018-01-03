<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TeamRepository")
 */
class Team
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    // add your own fields
    
   	/** @ORM\Column(type="string", length=140) */
    private $name;

    public function getName() 
    {
    	return $this->name;
    }

    public function setName($name) 
    {
    	$this->name = $name;
    }

}
