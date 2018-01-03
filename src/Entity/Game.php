<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    // add your own fields
    /** @ORM\ManyToOne(targetEntity="Team") */	
    private $homeTeam;

	/** @ORM\ManyToOne(targetEntity="Team") */
    private $awayTeam;

    /** @ORM\Column(type="integer") */
    private $week;
}
